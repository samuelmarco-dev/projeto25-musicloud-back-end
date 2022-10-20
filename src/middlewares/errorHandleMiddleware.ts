import { NextFunction, Request, Response } from "express";
import { AppError } from "../types/errorTypes";

export default function handleError(err: AppError, req: Request, res: Response, next: NextFunction): void {
    console.error(err);

    if (err) res.send(err.message).status(err.status);
    else res.sendStatus(500);
}

