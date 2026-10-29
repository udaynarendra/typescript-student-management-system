import type { ErrorRequestHandler,Request,Response,NextFunction } from "express";

import { ApiError } from "../utils/ApiError.js";

export const errorMiddleware: ErrorRequestHandler = (
    err:any,
    req:Request,
    res:Response,
    next:NextFunction
) => {
    let error={...err};
    error.message=err.message;
    //Log to console for the developer
    console.error('ERROR LOG:',err);
    let statusCode = 500;
    let message = "Internal Server Error";
//send Operational Error (Predictable client errors)
    if (error.isOperational||error instanceof ApiError) {
        res.status(error.statusCode|| 500).json({
            success:false,
            error:error.message,
            //only send stack trace in development mode
            stack:process.env.NODE_ENV==='development'?err.stack:undefined
        })
        statusCode = error.statusCode;
        message = error.message;
    }

    else{
        //send Programming/unknown Error(Don't leak details to client)
        res.status(statusCode).json({
        success: false,
        error:'Server Error.Something went wrong.'
    });
}
};