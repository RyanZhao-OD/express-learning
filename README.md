## todo
函数式编程
curl


## 使用到的模块
- 核心模块
```js
const path = require('path');
const http = require('http');
const url = require('url');
const util = require('util');
const fs = require('fs');
const querystring = require('querystring');
```

- 第三方模块
```
"dependencies": {
  "body-parser": "^1.15.2",
  "cookie-parser": "^1.4.3",
  "ejs": "^2.5.2",
  "express": "^4.14.0",
  "express-session": "^1.14.2"
},
"devDependencies": {},
```

## 第三方模块express
```js
const express = require('express');  // 第三方模块
let app = express();
```

app是一个函数 内部维持一个数组 路由+中间件
匹配到路由 后面的路由不会再执行
中间件会逐个执行(如果没有抛出错误)

```js
app.listen = function listen() {
    var server = require('http').createServer(this);  //this就是app 是个请求监听的callback, 有请求就会调用app
    return server.listen.apply(server, arguments);
};
```

##中间件
使用中间件. 中间件要写在前面
和路由的联系和区别

1. 他们都在同一个数组中
2. 中间件不匹配路径和方法名，路由要匹配路径和方法名
3. 中间件多了next参数，它能决定是否继续
4. 路由后面的中间件不会再执行

```js
// 普通中间件
app.use(function(request, response, next) {
    // ...
    next();
});

// 错误中间件
app.use(function(error, request, response, next) {
    // ...
    next();
});
```

 
中间件模块：

- body-parser 解析请求体
- cookie-parser 解析cookie
- express-session 使用session

