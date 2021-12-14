var express = require('express');
const { config } = require('dotenv');

config();
var app = express();

const { urlencoded, json } = require('body-parser');
const { firebaseApp } = require('./firebase.js');

var port = process.env.PORT || 3000;

app.use(urlencoded({ extended: true }));
app.use(json());

var authenticator = require('./routes/auth.js');

app.use('/auth', authenticator);
app.use(function(req, res) {
    res.status(404).send({ url: req.originalUrl + ' not found' })
});

app.listen(port);

console.log('E Task Manager RESTful API server started on: ' + port);