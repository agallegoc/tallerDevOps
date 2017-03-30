"use strict";

var express = require('express');
var app = express();

var serverConfig = require('./app/serverConfig');
var routes = require('./app/routes');

serverConfig(app);
routes(app);

var server = app.listen(app.get('port'), app.get('ip'), function() {
	console.log("ToDo List " + process.env.npm_package_version);
	console.log('Express server listening on ' + app.get('ip') + ':' + app.get('port'));
});

module.exports = server;
