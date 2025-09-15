import {Request, Response, NextFunction} from 'express';
import {AppError} from '../ultis/AppError'

//Solving error
export function errorHandler(err: Error, req: Request, res: Response, next: NextFunction){
    if(err instanceof AppError){
        res.status(err.status).json({
            message: err.message
        })
    } else{
        res.status(500).json({
            message: err.message
        });
    }
}