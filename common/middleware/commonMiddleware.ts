import express from 'express';
import { validationResult } from 'express-validator';

class CommonMiddleware {
    validate = (validations: any[]) => {
        return async (
            req: express.Request,
            res: express.Response,
            next: express.NextFunction
        ) => {
            await Promise.all(validations.map(validation => validation.run(req)));

            const errors = validationResult(req);
            if (errors.isEmpty()) {
                return next();
            }

            res.status(400).json({
                errors: errors.array()
            });
        };
    };
}

export default new CommonMiddleware();
