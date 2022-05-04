# JS developer task

Your task is to add three new endpoints.

When you are done, you can either send a pull request to this repository with your solution or email your solution to [HR manager](mailto:tatiana.gdeshinskaya@onix-systems.com).

You will then receive a detailed review of your code.

Good luck!

## Endpoint
### Country capital

Endpoint must return a capital of the provided country.

* Method: `GET`
* Endpoint: `http://localhost:3000/capital`
* Query parameters: 
    * `country`
* Example of request and what should be returned: 
    * `GET` `http://localhost:3000/capital?country=latvia` 
    * Returned text: `Capital of Latvia is Riga` 
* Suggested modules to use: 
    * [country-json](https://github.com/samayo/country-json)
    * [fs](https://nodejs.org/api/fs.html)
