// using this API to retrieve VAT info in Europe
// https://vatlayer.com

const fetch = require("node-fetch");

// About fetch API
// https://attacomsian.com/blog/javascript-fetch-html-response

//https://stackoverflow.com/questions/62386582/environment-variables-not-working-next-js-9-4-4

// https://www.freecodecamp.org/news/how-to-use-environment-variables-in-vanillajs/

// Authorisation header won't work with this API
let key = process.env.VAT_API_KEY;

const result = fetch(
  `http://apilayer.net/api/rate?access_key=${key}&country_code=GB`
)
  .then((response) => response.text())
  .then((data) => console.log(data));

/*
fetch("https://www.google.com")
  .then((res) => res.text())
  .then((res) => console.log(res))
  .catch((err) => console.error(err));

  */
