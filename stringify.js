const util = require('util');
// console.log(JSON.stringify(global));  //TypeError: Converting circular structure to JSON

console.log(util.inspect(global));