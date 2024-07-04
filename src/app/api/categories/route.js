import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
	return NextResponse.json(await prisma.category.findMany());
}

export async function POST(req) {
	const data = await req.json();
	try {
		await prisma.category.create({
			data: {
				name: data.category,
			},
		});
		return NextResponse.json(
			{ msg: "La catégorie est bien sauvegardée" },
			{ status: 200 }
		);
	} catch (error) {
		return NextResponse.json(
			{
				error: "Une erreur est survenue lors de la sauvegarde de la catégorie",
			},
			{ status: 500 }
		);
	} finally {
		await prisma.$disconnect();
	}
}
