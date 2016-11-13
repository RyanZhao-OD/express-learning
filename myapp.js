// 当请求到来时执行app函数 会对数组里的配置项一次匹配
// 匹配上的话就执行，匹配不上 就不执行
let app = function(request, response){
    let i = 0;
    function next() {
        let fn = app._routes[i++];
        if(fn) {
            fn(request, response, next);
        }
    }
    next();
};
app._routes = [];

app.use = function(callback) {
    this._routes.push(callback);
};

//-------------------
app.use(function(request, response, next) {
    console.log(1);

    // 模拟send()
    response.send = function(params){
        var type = typeof params;//获得参数类型
        switch (type){//判断参数类型
            case 'object'://如果是对象
                res.setHeader('Content-Type','application/json; charset=utf-8');
                res.end(JSON.stringify(params));
                break;
            case 'string':
                res.setHeader('Content-Type','text/html; charset=utf-8');
                res.end(params);
                break;
            case 'number':
                res.setHeader('Content-Type','text/plain; charset=utf-8');
                res.statusCode = params;
                res.end(http.STATUS_CODES[params]);
                break;
            default:
                res.end(util.inspect(params));

        }
    }
    next();
});
app.use(function(request, response, next) {
    console.log(2);
    response.end('ok');
});

let http = require('http');
let server = http.createServer(app);
server.listen(8080);