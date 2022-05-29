const http = require("http");
const url = require("url");
const cities_by_capital = require("country-json/src/country-by-capital-city.json");

// configs
const hostname = "127.0.0.1";
const port = 3000;

// server
const server = http.createServer((req, res) => {
  const urlObject = url.parse(req.url, true); // parseQueryString = true
  const pathParts = urlObject.pathname.split("/").slice(1);
  const queryObject = urlObject.query;

  // resonse defaults
  res.statusCode = 404;
  res.setHeader("Content-Type", "text/plain");

  // improvised routing
  if (req.method === "GET" && pathParts.length === 1 && pathParts[0] === "capital") {
    const countryName = queryObject.country || "";

    if (!countryName) {
      res.end(
        "Enter the name of a country in URL query's '?country=Name' param."
      );
      return;
    }

    const countryObject = cities_by_capital.find(
      (v) =>
        v.country.localeCompare(countryName, undefined, {
          sensitivity: "base", // case and assent insensitive
        }) === 0
    );

    if (countryObject) {
      res.statusCode = 200;
      res.end(`Capital of ${countryObject.country} is ${countryObject.city}`);
    } else {
      res.end(`Can't find the capital of ${countryName}.`);
    }
    return; // to not cause "write after end" error
  }

  // route not found / not defined
  res.end(
    "Route not defined. Try http://localhost:3000/capital?country=latvia"
  );
});

// server launch
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
