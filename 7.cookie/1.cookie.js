const http = require('http');
const url = require('url');
const querystring = require('querystring');
const util = require('util');

http.createServer(function(request, response) {
    let urlObj = url.parse(request.url, true);
    let pathname = urlObj.pathname;
    if('/write' === pathname) {
        // response.setHeader('Set-Cookie', 'name=ryan');  // 写一个值
        response.setHeader('Set-Cookie', ['name=ryan', 'age=8']);  // 一次写多个值

        response.end();
    } else if('/read' === pathname ) {
        let headerCookies = request.headers.cookie;
        let cookies = querystring.parse(headerCookies, '; ');
        response.end(util.inspect(cookies));
    } else {
        response.end('404');
    }
}).listen(8080);