let app = function(request, response){
    let index = 0;
    function next() {
        app._routes[index++](request, response, next);
    }
    next();
};
app._routes = [];
app.use = function(callback) {
    this._routes.push(callback);
};
//----------
app.use(function(request, response, next) {
    console.log(1);
    next();
});

app.use(function(request, response, next) {
    console.log(2);
    response.end();
});

const http = require('http');
let server = http.createServer(app);
server.listen(8080);