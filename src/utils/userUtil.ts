import { SignUpBody } from "../types/userTypes.js";

export default async function verifySignUp(body: SignUpBody): Promise<boolean> {
    const verification = (body: SignUpBody) => {
        return (
            !body.hasOwnProperty("name") ||
            !body.hasOwnProperty("email") ||
            !body.hasOwnProperty("password")
        );
    }

    for (const key in body) {
        if (verification(body)) throw new Error("Missing required fields");
    }
    return true;
}
