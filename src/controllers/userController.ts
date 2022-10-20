import { Request, Response } from "express";
import userServices from "../services/userServices.js";
import verifySignUp from "../utils/userUtil.js";

export async function signUpUser(req: Request, res: Response) {
    await verifySignUp(req.body);
    await userServices.createUser(req.body);

    res.sendStatus(201);
}
