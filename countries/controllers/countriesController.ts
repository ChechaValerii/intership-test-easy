import express from 'express';
import countriesService from '../services/countriesService';

class CountriesController {
    async getCapitalByCountry(req: express.Request, res: express.Response) {
        const countryWithCapital = await countriesService.getCapitalByCountry(req.query.country as string);
        let result = `Capital for ${req.query.country} Not Found`;
        if (countryWithCapital) {
            result = `Capital of ${countryWithCapital.country} is ${countryWithCapital.city}`;
        }

        res.status(200).json({
            data: result
        });
    }
}

export default new CountriesController();
