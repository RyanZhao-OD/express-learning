/*
 * 参数的处理
 * 请求行 method url(pathname+queryString)
 * 请求头 headers
 * 请求体 body
 */

const express = require('express');
const url = require('url');
let app = express();
app.get('/', function (request, response) {
    // 访问http://localhost:8080/?name=xxx&age=13时
    console.log(request.path);    // /
    console.log(request.query);   // { name: 'xxx', age: '13' }
    // 是express封装的，不是node核心包http的
});


/*
 * 参数是对象时 Content-Type:application/json; charset=utf-8
 * 参数是数字时 数字是状态码 Content-Type:text/plain; charset=utf-8
 */
app.get('/send', function (request, response) {
    // response.end(1); //TypeError: First argument must be a string or Buffer

    // response.send({
    //     name: 'hehe',
    //     age: 23
    // });  //Content-Type:application/json; charset=utf-8
    response.send(404);  // 不建议send()数字 用response.status(404).send('页面没找到');
    // 如果只是send(404) 原因短语不能自定义
});

// app.get(/^\/users\/(\d+)$/, function(request, response){
//     response.end('正则');
// });

// app.get(/^\/users\/(\w+)$/, function(request, response){
//     response.end('正则');
// });

app.get('/users/:id/:name', function(request, response){
    // params是express帮我们添加的对象属性
    // 属性名就是占位符 值是实际请求的字符串占位符对应的部分
    response.write('id=' + request.params.id + ' ');
    response.end('name=' + request.params.name);
});

app.listen(8080);