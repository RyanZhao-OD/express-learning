const express = require('express');
const cookieParser = require('cookie-parser');

let app = express();
app.use(cookieParser());  // 使用了cookie-parser中间件后，cookies

app.get('/write', function(request, response) {
    response.cookie('name', 'zr');
    response.cookie('age', 8, {domain: 'www.ryan.com'});
    response.cookie('sex', 'male', {path: '/read1'});   //访问 /read1时 才发送这个cookie

    response.cookie('height', '180', {expires: new Date(Date.now() + 3 * 1000)});
    // 得到一个绝对的时间点 当前时间的3秒后。缺点 客户端修改时间
    response.cookie('aaa', '180', {maxAge: 3 * 1000});   // 3s后失效 与上面作用相同

    response.cookie('httpOnly', '180', {httpOnly: true});   // js访问不了
    response.send('write ok');
});

// http://localhost:8080/read1
app.get('/read1', function(request, response) {
    // response.send(request.headers.cookie);   原生
    response.send(request.cookies);       // 使用cookie-parser中间件
});

// http://localhost:8080/read
app.get('/read', function(request, response) {
    response.send(request.headers.cookie);    // 原生
});



app.listen(8080);