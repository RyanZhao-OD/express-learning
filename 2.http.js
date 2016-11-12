//核心模块
const http = require('http');
const url = require('url');


http.createServer(function(request, response) {
    // request.url  路径名+queryString
    let pathname = url.parse(request.url).pathname;
    response.setHeader('Content-Type', 'text/plain;charset=utf-8');
    if('/' === pathname) {
        response.end('首页');
    } else if('/login' === pathname) {
        response.end('login');
    } else if('/user' === pathname) {
        response.end('user');
    } else {
        response.end(`Cannot ${request.method} ${pathname}`);
    }
}).listen(8080);

