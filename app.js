const http = require('http');
var cities = require('./src/country-by-capital-city.json');
const PORT = 3000;
 
http.createServer(function(request, response){
    if (request.method === 'GET' && request.url !== '/favicon.ico') {
        /*let url = new URL("http://localhost:3000" + request.url);
        let country = url.searchParams.get("country").replace('%20', ' ');*/
        let country = request.url.split('=')[1].replace('%20', ' '); //get parameter country and replace url separator to space

        for (let i = 0; i < cities.length; i++) {
            if (cities[i].country.toLowerCase() == country.toLowerCase()) {
                var capital = cities[i].city;
                country = cities[i].country;
                break;
            }
        }
        
        response.setHeader('Content-Type', 'text/plain');
        response.write(`Capital of ${country} is ${capital}`);
        response.end();
    }
}).listen(PORT);
