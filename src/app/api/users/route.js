import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import argon2 from "argon2";

const hashingOptions = {
	type: argon2.argon2id,
	memoryCost: 19 * 2 ** 10, // 19 MiB in KiB
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

export async function POST(request) {
	const data = await request.json();
	const action = request.url.split("=")[1];

	if (action === "login") {
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
	} else if (action === "register") {
		console.log({ data });
		const { name, email, password, street, zipcode } = data;

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
			return NextResponse.json(
				{ msg: "User successfully created" },
				{ status: 201 }
			);
		} catch (error) {
			return NextResponse.json({ error: error.message }, { status: 500 });
		} finally {
			await prisma.$disconnect();
		}
	} else {
		return NextResponse.json(
			{ message: "Invalid action" },
			{ status: 400 }
		);
	}
}
