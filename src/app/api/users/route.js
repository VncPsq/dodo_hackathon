import prisma from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server";

import argon2 from "argon2";

const hashingOptions = {
	type: argon2.argon2id,
	memoryCost: 19 * 2 ** 10 /* 19 Mio en kio (19 * 1024 kio) */,
	timeCost: 2,
	parallelism: 1,
};

export async function GET() {
	const users = await prisma.user.findMany();

	// remove password from response
	users.forEach((user) => {
		delete user.password;
	});

	return NextResponse.json(users);
}

export async function POST(NextRequest) {
	const data = await NextRequest.json();

	if (NextRequest.url.split("=")[1] === "login") {
		const { email, password } = data;
		const user = await prisma.user.findUnique({
			where: {
				email,
			},
		});

		console.log({ user });

		if (!user) {
			return NextResponse.json(
				{ message: "Invalid credentials" },
				{ status: 401 }
			);
		}

		const isPasswordValid = await argon2.verify(user.password, password);

		if (!isPasswordValid) {
			return NextResponse.json(
				{ message: "Invalid credentials" },
				{ status: 401 }
			);
		}

		const token = {
			id: user.id,
			role: user.role,
		};

		return NextResponse.json({ token });
	} else if (NextRequest.url.split("=")[1] === "register") {
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
			NextResponse.status(200).json({ msg: "User bien save" });
		} catch (error) {
			NextResponse.status(500).json({ error });
		} finally {
			await prisma.$disconnect();
		}
	}
}
