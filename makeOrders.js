// using this API to retrieve VAT info in Europe
// https://vatlayer.com

someOrder = {
  items: [
    { name: "Dragon food", price: 8, quantity: 8 },
    { name: "Dragon cage (small)", price: 800, quantity: 2 },
    { name: "Shipping", price: 40, shipping: true },
  ],
};

makeOrder = (order) => {
  totalNormalItems = order.items
    .filter((x) => !x.shipping)
    .reduce((prev, cur) => prev + cur.quantity * cur.price, 0);
  shippingItem = order.items.find((x) => !!x.shipping);
  shipping = totalNormalItems > 1000 ? 0 : shippingItem.price;
  return totalNormalItems + shipping;
};

const fetch = require("node-fetch");

// About fetch API
// https://attacomsian.com/blog/javascript-fetch-html-response

//https://stackoverflow.com/questions/62386582/environment-variables-not-working-next-js-9-4-4

// https://www.freecodecamp.org/news/how-to-use-environment-variables-in-vanillajs/

// Authorisation header won't work with this API
let key = process.env.VAT_API_KEY;

let arr = [];

let result = fetch(
  `http://apilayer.net/api/rate?access_key=${key}&country_code=GB`
)
  .then((response) => response.json())
  .then((data) => console.log(data));
