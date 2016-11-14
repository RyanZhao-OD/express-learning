const express = require('express');
const ejs = require('ejs');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');

let users = [];
let app = express();
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({
    resave: true,  // 每次客户端访问服务器的时候都重新保存session参数
    secret: 'ryan',  // 秘密 加密
    saveUninitialized: true  // 每次访问不管是否访问session, 都会保存未初始化的session
}));  // 使用了express-session中间件后，request多了一个属性session

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
    response.render('reg', {});
});

app.post('/reguser', function(request, response){
    let user = request.body;
    console.log(user);
    var serverUser = users.find(function(item){
        return item.username == user.username;
    });
    if(serverUser) {
        response.redirect('/reg');
    } else {
        users.push(user);
        response.redirect('/login');
    }
});

//GET请求 /login的时候返回空白的登陆表单
app.get('/login',function(request, response){
    response.render('login', {});
});

app.post('/tologin', function(request, response){
    let user = request.body;
    console.log('tologin:' + user);
    var tempUser = users.find(function(serverUser) {
        return serverUser.username == user.username && serverUser.password == user.password;
    });
    if(tempUser) {
        request.session.username = tempUser.username;
        response.redirect('/user/' + tempUser.username);
    } else {
        response.redirect('/login');
    }
});

//GET请求 /welcome的时候返回空白的欢迎表单
app.get('/user/:username',function(request, response){
    let username = request.params.username;
    var tempUser = users.find(function(user){
        return user.username === username;
    });
    if(tempUser) {
        if(request.session.username === tempUser.username) {
            response.render('user', {
                username: tempUser.username,
                password: tempUser.password
            });
        } else {
            response.render('login', {
                msg: '用户未登陆'
            });
        }

    } else {
        response.render('login', {
            msg: '用户不存在'
        });
    }
    // response.render('reg', users[]);
});
app.listen(8080);