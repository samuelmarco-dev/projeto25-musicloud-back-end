import pkg from "@prisma/client";

const { PrismaClient } = pkg;
const prisma: pkg.PrismaClient = new PrismaClient();

export default prisma;
