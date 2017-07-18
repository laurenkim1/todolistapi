// app.js

var express = require('express');
var app = express();
var db = require('./db');

var RequestController = require('./request/RequestController');
app.use('/request', RequestController);

module.exports = app;
