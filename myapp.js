let app = function(request, response){
    app.routes.forEach(function(item) {

    });
};
app.routes = [];
app.use = function(callback) {
    this.routes.push(callback);
};

app.use(function(request, response, next) {
    console.log(1);
    next();
});
app.use(function(request, response, next) {
    console.log(2);
    response.end('ok');
});

let http = require('http');
let server = http.createServer(app);
server.listen(9090);