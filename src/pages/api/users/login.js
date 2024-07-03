"use server";

import prisma from "@/lib/prisma";
import argon2 from "argon2";
import { sign } from "@/lib/jwt";

export default async function handle(req, res) {
	try {
		if (req.method !== "POST") {
			return res.status(405).json({ message: "Method not allowed" });
		}

		const { email, password } = req.body;
		const user = await prisma.user.findUnique({
			where: {
				email,
			},
		});

		if (!user) {
			return res.status(401).json({ message: "Invalid credentials" });
		}

		const isPasswordValid = await argon2.verify(user.password, password);

		if (!isPasswordValid) {
			return res.status(401).json({ message: "Invalid credentials" });
		}

		const token = sign({
			id: user.id,
			role: user.role,
		});

		res.status(200).json({ token });
	} catch (error) {
		res.status(500).json({ error });
	} finally {
		await prisma.$disconnect();
	}
}
