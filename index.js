const express = require('express');
const req = require('express/lib/request');
const app = express();
const countries = require('./countries');

app.get('/capital', async function(req, res) {
    try {
        const { country, city } = countries.find((el, i, array) => el.country.toLowerCase() == req.query.country.toLowerCase())
        res.status(200).send(`Capital of ${country} is ${city}`)
    } catch (err) {
        res.status(404).send('Country is not defined')
    }

})

app.listen(3000)