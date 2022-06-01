const express = require('express');
const fs = require('fs');

const countries = require('./countries.json');

const app = express();

app.get('/', function (req, res) {
  res.send('Hello World');
});

app.get('/capital', function (req, res) {
  const countryQuery = req.query.country.toLowerCase();
  const country = countries.find(
    (country) => country.country.toLowerCase() === countryQuery
  );

  if (country) {
    return res
      .status(200)
      .send(`Capital of ${country.country} is ${country.city}`);
  }

  return res.status(404).send('Capital not found!');
});

app.listen(3000);
