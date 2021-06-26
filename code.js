/*

💛 Wallaby (Show sponsor)
Wallaby.js runs your JavaScript tests immediately as you type and displays execution results in your code editor. It is insanely fast, because it only executes tests affected by your code changes and runs tests in parallel. Let them know you came from us by using this link:
http://wallaby.funfunfunction.com

*/

function sum(intArray) {
  return intArray.reduce((acc, elem) => {
    return acc + elem;
  }, 0);
}

module.exports = sum;
