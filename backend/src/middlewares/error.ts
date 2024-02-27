import { NextFunction, Request, Response } from "express";
import { Controller } from "../types/types.js";
import ErrorHandler from "../utils/utility_classes.js";

export const TryCatchBlockWrapper = (func: Controller) => (
    req: Request,
    res: Response,
    next: NextFunction
    )=> {
    return Promise.resolve(func(req,res,next)).catch(next);
};

export const errorMiddleware = (
    err: ErrorHandler,
    req: Request,
    res: Response,
    next: NextFunction
    )=>{
        
        err.message ||= "server error"
        err.statusCode ||= 500;

        if (err.name === "CastError") err.message = "Invalid ID";

        return res.status(err.statusCode).json({
            success: false,
            message: err.message,
        })
}