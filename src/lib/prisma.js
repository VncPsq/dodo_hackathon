import { PrismaClient } from "@prisma/client";

const opt = {
	log: ["query", "info", "warn", "error"],
	errorFormat: "pretty",
};

const prisma = new PrismaClient(opt);

export default prisma;
