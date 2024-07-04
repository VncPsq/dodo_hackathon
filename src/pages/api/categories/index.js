import prisma from "@/lib/prisma";

export default async function handle(req, res) {
	       

	try {
		await prisma.category.create({
			data: {
				name: req.body.category,
			},
		});
		res.status(200).json({ msg: "La categorie est bien save" });
	} catch (error) {
		res.status(500).json({ error: "Une erreur est survenu" });
	}
}
