const express = require('express');
const bodyParser = require('body-parser');

const parser = require('./routes/parse');

const app = express();

app.use(bodyParser.json()); //supports parsing of application/json


app.use(bodyParser.urlencoded({extended: true}));  // supports parsing of x-www-form-urlencoded <form>


//headers to avoid CORS errors
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});


app.use(parser);

app.listen(process.env.PORT || 8080);
