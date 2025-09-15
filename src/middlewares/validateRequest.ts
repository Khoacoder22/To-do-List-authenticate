import { ZodObject, ZodError } from "zod";
import { Request, Response, NextFunction } from "express";

export const validateRequest = (schema: ZodObject<any>) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      if (schema) {
        schema.parse({
          params: req.params,
          body: req.body,
          query: req.query,
        });
      }
      next();
    } catch (err) {
      if (err instanceof ZodError) {
        return res.status(400).json({
          message: "Validation failed",
          errors: err.issues.map(issue => ({
            path: issue.path.join("."), // format lại message 
            message: issue.message,
          })),
        });
      }
      next(err);
    }
  };
};
