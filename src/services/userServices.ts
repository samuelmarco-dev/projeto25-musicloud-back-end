import bcrypt from "bcrypt";
import { User } from "@prisma/client";
import { SignUpBody } from "../types/userTypes.js";
import userRepositories from "../repositories/userRepository.js";
import cryptrUtil from "../utils/cryptrUtil.js";

async function createUser(user: SignUpBody): Promise<void> {
    const { name, email, password } = user;

    const userExists: User | null = await userRepositories.findUserByEmail(email);
    if (userExists) throw new Error("User already exists");

    const salt: string = await bcrypt.genSalt(10);
    const passwordEncrypted: string = await bcrypt.hash(password, salt);
    const emailEncrypted: string = cryptrUtil.cryptrEncrypted(email);

    await userRepositories.createUserInDatabase({
        name,
        email: emailEncrypted,
        password: passwordEncrypted,
    });
}

const userServices = {
    createUser,
};

export default userServices;
