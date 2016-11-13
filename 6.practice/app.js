const express = require('express');
const ejs = require('ejs');
const path = require('path');

let users = [];
let app = express();
//设置模板引擎 用来添加文件后缀的
app.set('view engine', 'html');

//console.log(app.get('view engine'));
//设置模板存放目录 指定一个模板的绝对路径
app.set('views', path.join(__dirname, 'template'));

//设置对于html类型的模板使用ejs来进行渲染
app.engine('.html', ejs.__express);


//GET请求 reg的时候返回空白的注册表单
// 可以通过query是否有值来判断是否是提交

app.get('/reg', function(request, response){
    let username = request.query.username;
    let password = request.query.password;
    if(username) {
        users.push({username, password});
        response.redirect('/login');
    } else {
        response.render('reg', {});
    }
});
// app.post('/reguser', function(request, response){
//
// });

//GET请求 /login的时候返回空白的登陆表单
app.get('/login',function(request, response){
    let username = request.query.username;
    let password = request.query.password;
    if(username) {
        var user = users.find(function(user){
            if(user.username == username && user.password == password) {
                response.redirect('/user/' + username);
            }
        });
        response.send('账号或密码错误');
    } else {
        response.render('login', {});
    }


});

//GET请求 /welcome的时候返回空白的欢迎表单
app.get('/user/:username',function(request, response){
    let username = request.params.username;
    var user = users.find(function(user){
        if(user.username == username) {
            response.render('user', {
                username: user.username,
                password: user.password
            });
        }
    });
    // response.render('reg', users[]);
});
app.listen(9090);