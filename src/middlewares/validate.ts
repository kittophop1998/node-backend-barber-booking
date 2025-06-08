import { NextFunction, Request, Response } from "express";
import Joi from "joi";

export const validate = (schema: Joi.ObjectSchema) => (req: Request, res: Response, next: NextFunction): void => {
    const { error } = schema.validate(req.body, { abortEarly: false });

    if (error) {
        res.status(400).json({
            message: "Validation error",
            details: error.details.map(detail => detail.message)
        });
        return;
    }

    next();
}