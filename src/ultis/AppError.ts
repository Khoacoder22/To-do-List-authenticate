export class AppError extends Error {
    //field
    status: number;
    isOperational: boolean;

    //constructor
    constructor(message: string, status: number) {
        super(message);
        this.status = status;
        this.isOperational = true;

        Error.captureStackTrace(this, this.constructor);
    }    
}
