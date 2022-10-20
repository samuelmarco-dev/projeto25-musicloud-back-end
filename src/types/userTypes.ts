import { User } from "@prisma/client";

export type SignUpBody = Omit<User, "id" | "createdAt" | "updatedAt">;
