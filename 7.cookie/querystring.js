const querystring = require('querystring');
console.log(querystring.parse('name=ryan; age=8', '; '));
console.log(querystring.parse('name@ryan; age@8', '; ', '@'));