import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
	return NextResponse.json(await prisma.priority.findMany());
}

export async function POST(req) {
	const data = await req.json();

	try {
		await prisma.priority.create({
			data: {
				name: data.priority,
			},
		});
		return NextResponse.json(
			{ msg: "La priorité est bien sauvegardée" },
			{ status: 200 }
		);
	} catch (error) {
		return NextResponse.json(
			{
				error: "Une erreur est survenue lors de la sauvegarde de la priorité",
			},
			{ status: 500 }
		);
	} finally {
		await prisma.$disconnect();
	}
}
