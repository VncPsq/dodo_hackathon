import prisma from "@/lib/prisma";

export default async function handle(req, res) {
	try {
		await prisma.service.create({
			data: {
				name: req.body.service,
			},
		});
		res.status(200).json({ msg: "La priori est bien save" });
	} catch (error) {
		res.status(500).json({ error: "Une erreur est survenu" });
	}
}
