const express = require('express');  // 第三方模块
// const express = require('express/index.js');


let app = express();

//当客户端通过get的请求方式访问/路径的时候
// get方法加路由加入到内部数组，请求来时 逐个匹配
// 先匹配方法 然后路径 然后执行callback

// get post delete put head patch

// 使用中间件. 中间件要写在前面
// 和路由的联系和区别
/*
 * 1.他们都在同一个数组中
 * 2.中间件不匹配路径和方法名，路由要匹配路径和方法名
 * 3.中间件多了next参数，它能决定是否继续
 * 4.路由后面的中间件不会再执行
 */
app.use(function(request, response, next) {
    console.log(11);
    response.setHeader('Content-Type', 'text/plain;charset=utf-8');
    next();
});


app.get('/', function(request, response) {
    response.end('首页');
});

app.get('/user', function(request, response) {
    response.end('user用户主页');
});

app.get('/login', function(request, response) {  //匹配第一个
    response.end('get login1 登录');
});
app.get('/login', function(request, response) {
    response.end('get login2 登录');
});
app.post('/login', function(request, response) {
    response.end('post login 登录');
});
// curl -X POST http://localhost:8080/login

//定制404提示  //写在最后
app.all('*', function(request, response) {
    response.end('404 没找到');
});


// 在当前本机服务器上监听8080端口
app.listen(8080);

//源码实现
/*
app.listen = function listen() {
    var server = require('http').createServer(this);  //this就是app 是个请求监听的callback, 有请求就会调用app
    return server.listen.apply(server, arguments);
};
 */
//