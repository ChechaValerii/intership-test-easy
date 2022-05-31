import countryByCapitalCity from 'country-json/src/country-by-capital-city.json';

class CountriesDao {
    getCapitalByCountry(country: string) {
        return countryByCapitalCity.find(item => item.country.toLowerCase() === country.toLowerCase());
    }
}

export default new CountriesDao();
