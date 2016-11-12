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
