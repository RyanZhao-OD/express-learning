const util = require('util');
// console.log(JSON.stringify(global));  //TypeError: Converting circular structure to JSON

console.log(util.inspect(global)); // 一定不会报错