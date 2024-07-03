import prisma from "@/lib/prisma";

export default async function handle(req, res) {
	try {
		await prisma.priority.create({
			data: {
				name: req.body.priority,
			},
		});
		res.status(200).json({ msg: "La priorité est bien save" });
	} catch (error) {
		res.status(500).json({ error: "Une erreur est survenu" });
	} finally {
		await prisma.$disconnect();
	}
}
