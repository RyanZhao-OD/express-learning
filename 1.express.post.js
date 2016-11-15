const bodyParser = require('body-parser');
const express = require('express');

let app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.post('/login', function(request, response) {
    let user = request.body;
    response.send(user);
});
app.listen(8080);