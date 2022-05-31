import CountriesDao from '../daos/countriesDao';
import { CRUD } from '../../common/interfaces/crudInterface';

class CountriesService implements CRUD {
    async getCapitalByCountry(country: string) {
        return CountriesDao.getCapitalByCountry(country);
    }
}

export default new CountriesService();
