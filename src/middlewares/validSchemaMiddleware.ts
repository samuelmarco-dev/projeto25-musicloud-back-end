import { NextFunction, Request, Response } from "express";
import { ObjectSchema } from "joi";

export default function validationSchema(schema: ObjectSchema) {
    return (req: Request, res: Response, next: NextFunction) => {
        const validation = schema.validate(req.body, { abortEarly: false });
        const { error } = validation;

        if (error)
            return res
                .status(422)
                .send(error.details.map(detail => detail.message));
        else next();
    };
}
