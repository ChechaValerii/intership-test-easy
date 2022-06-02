const express = require("express");
const cities = require('./node_modules/country-json/src/country-by-capital-city.json');
    
const app = express();  
app.use(express.static(__dirname + "/public"));

app.get("/capital", function(req, res){
    let newStrparam = req.query.country[0].toUpperCase() + req.query.country.slice(1);
    const country = cities.filter(i => {
        return i.country == newStrparam;
    })

    if(req){
        const resText = `Capital of ${country[0].country} is ${country[0].city}`;
        res.send(resText);
    }
    else{
        res.status(404).send();
    }
});
   
app.listen(3000, function(){
    console.log("It's work");
});