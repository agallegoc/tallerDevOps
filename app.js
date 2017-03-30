"use strict";

var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({
    extended: false
});

var config = require('./app/config');
var routes = require('./app/routes');

config(app);
routes(app);

var server = app.listen(app.get('port'), app.get('ip'), function() {
    console.log("ToDo List " + process.env.npm_package_version);
    console.log('Express server listening on ' + app.get('ip') + ':' + app.get('port'));
});

module.exports = server;