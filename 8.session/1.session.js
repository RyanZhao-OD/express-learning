const express = require('express');
const session = require('express-session');  // 第三方包

let app = express();
app.use(session({
    resave: true,  // 每次客户端访问服务器的时候都重新保存session参数
    secret: 'ryan',  // 秘密 加密
    saveUninitialized: true  // 每次访问不管是否访问session, 都会保存未初始化的session
}));  // 使用了express-session中间件后，request多了一个属性session

app.get('/visit', function(request, response) {
    let visit = request.session.visit = request.session.visit ? request.session.visit + 1 : 1;
    response.send(`这是您第${visit}次访问`);

});
app.listen(8080);