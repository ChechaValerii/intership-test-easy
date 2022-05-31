import { CommonRoutesConfig } from '../common/commonRoutesConfig';
import CountriesController from './controllers/countriesController';
import CommonMiddleware from '../common/middleware/commonMiddleware';
import express from 'express';
import { query } from 'express-validator';

export class CountriesRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app);
    }

    configureRoutes() {
        this.app
            .route(`/capital`)
            .get(
                CommonMiddleware.validate([
                    query('country')
                        .notEmpty().withMessage('Is Required')
                        .isLength({ min: 3 }).withMessage('Min Length 3 symbols'),
                ]),
                CountriesController.getCapitalByCountry
            );

        return this.app;
    }
}
