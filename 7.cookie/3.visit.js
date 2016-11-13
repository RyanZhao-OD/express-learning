const express = require('express');
const cookieParser = require('cookie-parser');

let app = express();
app.use(cookieParser());
app.get('/visit', function(request, response) {
    let cookies = request.cookies;
    let visit = 1;
    if(cookies && cookies.visit) {
        visit = parseInt(cookies.visit) + 1;
    }

    response.cookie('visit', visit);
    response.send(`第${visit}次访问`);

});

app.listen(8080);