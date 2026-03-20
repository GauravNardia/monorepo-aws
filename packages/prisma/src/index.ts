import dotenv from "dotenv";

dotenv.config({
  path: "../../packages/prisma/.env"
});

import { PrismaClient } from "./generated/prisma/client"
import { PrismaPg } from "@prisma/adapter-pg";

console.log("PRISMA DB:", process.env.DATABASE_URL!);

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});

export const client = new PrismaClient({
  adapter,
});