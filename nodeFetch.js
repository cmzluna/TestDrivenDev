// using https://euvatapi.com/
const fetch = require("node-fetch");

const process.env.VAT_API = 

// About fetch API
// https://attacomsian.com/blog/javascript-fetch-html-response
const result = fetch("https://eu.vatapi.com/v2/vat-price?country_code=DE", {
    headers: {
        'apikey': process.env.VAT_API_KEY
    }
})
.then(response => response.text())
.then(data => data.rates);

console.log(process.env.PORT)
 
/*
fetch("https://www.google.com")
  .then((res) => res.text())
  .then((res) => console.log(res))
  .catch((err) => console.error(err));

  */
