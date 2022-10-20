import { AppErrorTypes, AppError } from "../types/errorTypes.js";

export function conflictError(message?: string): AppError {
    return {
        type: "conflict",
        message: message ? message : "",
        status: 409,
    };
}

export function notFoundError(message?: string): AppError {
    return {
        type: "not_found",
        message: message ? message : "",
        status: 404,
    };
}

export function unauthorizedError(message?: string): AppError {
    return {
        type: "unauthorized",
        message: message ? message : "",
        status: 401,
    };
}
