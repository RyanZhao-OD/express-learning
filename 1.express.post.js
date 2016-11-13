const bodyParser = require('body-parser');
const express = require('express');

let app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.post('/login', function(request, response) {
    let user = request.body;
    console.log(user);
    response.send('aa');
});
app.listen(8080);