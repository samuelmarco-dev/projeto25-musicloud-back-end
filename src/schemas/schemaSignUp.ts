import joi, { ObjectSchema } from "joi";
import { SignUpBody } from "../types/userTypes.js";

const regexName: RegExp = /^[a-zA-ZáéíóúàâêôãõüçÁÉÍÓÚÀÂÊÔÃÕÜÇ ]+$/;
const schemaSignUp: ObjectSchema<SignUpBody> = joi.object({
    name: joi.string().pattern(regexName).required(),
    email: joi.string().email().required().trim(),
    password: joi.string().min(6).required().trim(),
    confirmPassword: joi.string().valid(joi.ref('password')).required()
});

export default schemaSignUp;
