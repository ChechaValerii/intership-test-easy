const http = require('http');
const url = require('url');
const server = http.createServer();
const port = 3000;
const hostname = '127.0.0.1';

const countryModule = require('./countryModule');

server.on('request', (req, res) => {
    const queryParameters = url.parse(req.url, true).query;
    const path = url.parse(req.url).pathname;
    let message = '';

    switch (path) {
        case '/capital':
            if (queryParameters.country) {
                let userCapital = countryModule.getCapitalByCountryName(queryParameters.country);
                if (userCapital) {
                    let countryName = queryParameters.country;
                    countryName = countryName.charAt(0).toUpperCase() + countryName.slice(1);
                    message = `Capital of ${countryName} is ${userCapital}`;
                    res.writeHead(200, { 'Content-Type': 'text/plain' });
                    res.end(message);
                } else {
                    res.writeHead(404, { 'Content-Type': 'text/plain' });
                    res.end(`Sorry, the capital for country ${queryParameters.country} not found`);
                }
            } else {
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.end('Sorry, required url parameters "country" not found');
            }
            break;
        default:
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.write('Route not defined');
            res.end();
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});