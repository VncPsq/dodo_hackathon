import prisma from "@/lib/prisma";
const argon2 = require("argon2");

const hashingOptions = {
	type: argon2.argon2id,
	memoryCost: 19 * 2 ** 10 /* 19 Mio en kio (19 * 1024 kio) */,
	timeCost: 2,
	parallelism: 1,
};
export default async function handle(req, res) {
	const { name, email, password, street, zipcode } = req.body;

	const hashedPassword = await argon2.hash(password, hashingOptions);

	try {
		await prisma.user.create({
			data: {
				name,
				email,
				password: hashedPassword,
				street,
				zipcode,
				rating: 0,
			},
		});
		res.status(200).json({ msg: "User bien save" });
	} catch (error) {
		res.status(500).json({ error });
	} finally {
		await prisma.$disconnect();
	}
}
