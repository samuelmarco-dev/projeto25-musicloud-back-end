import Cryptr from "cryptr";
import dotenv from "dotenv";
dotenv.config();

const cryptrSecret = process.env.CRYPTR_SECRET;
if (!cryptrSecret) throw new Error("Cryptr secret not found");
const cryptr = new Cryptr(cryptrSecret);

function cryptrEncrypted(dice: string): string {
    return cryptr.encrypt(dice);
}

function cryptrDecrypted(dice: string): string {
    return cryptr.decrypt(dice);
}

const cryptrUtil = {
    cryptrEncrypted,
    cryptrDecrypted
};

export default cryptrUtil;
