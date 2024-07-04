import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
	return NextResponse.json(
		await prisma.service.findMany({
			include: {
				category: true,
				owner: true,
				priority: true,
			},
		}),
		{ status: 200 }
	);
}

export async function POST(req) {
	const data = await req.json();

	try {
		const addService = await prisma.service.create({
			data: {
				title: data.title,
				content: data.content,
				expiration: new Date(data.expiration),
				available: true,
				categoryID: Number(data.categoryID),
				ownerID: Number(data.ownerID),
				priorityID: Number(data.priorityID),
			},
		});
		return NextResponse.json({ addService }, { status: 200 });
	} catch (error) {
		return NextResponse.json(
			{
				error: error.message,
			},
			{ status: 500 }
		);
	} finally {
		await prisma.$disconnect();
	}
}
