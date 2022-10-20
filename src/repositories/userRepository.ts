import { User } from '@prisma/client';
import prisma from "../../config/database.js";
import { SignUpBody } from '../types/userTypes.js';

async function findUserByEmail(email: string): Promise<User | null> {
    return await prisma.user.findUnique({
        where: { email }
    });
}

async function createUserInDatabase(user: SignUpBody): Promise<User> {
    const { name, email, password } = user;

    return await prisma.user.create({
        data: { name, email, password }
    });
}


const userRepositories = {
    findUserByEmail,
    createUserInDatabase
};

export default userRepositories;
