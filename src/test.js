const fetch = require("node-fetch");
require("dotenv").config();
let city = "London";
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`)
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error(error));