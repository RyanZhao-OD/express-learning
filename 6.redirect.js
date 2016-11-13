const express = require('express');

let app = express();
app.get('/', function(request, response) {
    response.redirect('/user');
});

app.get('/user', function(request, response) {
    console.log('user');
    response.send('user');
});

app.listen(8080);