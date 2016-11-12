const express = require('express');

let app = express();

app.use(function(request, response, next){
    request.money = 100;
    next();
});

app.use(function(request, response, next) {
    request.money -= 30;
    // 如果next没有参数 会继续执行后续的路由和正常的中间件
    // 如果传了参数 表示出错了 会跳过正常的路由和中间件 交给错误处理中间件来处理
    // next('myError');
    next('myError');
});

app.get('/money', function(request, response) {
    console.log('收到' + request.money);
    response.end();
});
app.use(function(error, request, response, next){   //错误处理中间件
    console.log('错误处理中间件');
    console.log(error);
    next();
});
app.use(function(request, response, next){   //错误处理中间件
    console.log('正常处理中间件');
    next();
});
app.get('/money', function(request, response) {
    console.log('1111收到' + request.money);
    response.end();
});

app.listen(8080);