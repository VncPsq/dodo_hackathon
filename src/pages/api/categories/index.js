import prisma from "@/lib/prisma";

export default async function handle(req, res) {
	try {
		const categories = await prisma.category.findMany();
		res.status(200).json({ categories });
	} catch (error) {
		res.status(500).json({ error: "Failed to fetch categories" });
	}
}
