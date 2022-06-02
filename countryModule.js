const fs = require('fs');

const cities = require('./node_modules/country-json/src/country-by-capital-city.json')

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

module.exports = {
    getCapitalByCountryName: function(countryName) {
        countryName = countryName.toLowerCase();
        countryName = capitalizeFirstLetter(countryName);

        let resultCapital = cities.filter(item => item.country == countryName);
        if (resultCapital.length > 0) {
            return resultCapital[0].city
        } else {
            return null;
        }
    }
};