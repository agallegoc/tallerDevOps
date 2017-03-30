"use strict";

var favicon = require('serve-favicon');
var expressStatic = require('express').static;
var ejs = require('ejs');
var expressLayouts = require('express-ejs-layouts');
var bodyParser = require('body-parser');
var morgan = require('morgan');

module.exports = function(app) {
	app.set('port', process.env.PORT || 3000);
	app.set('ip', process.env.IP || "127.0.0.1");
	app.set('env', process.env.ENV);

	app.engine('ejs', function(filePath, options, callback) {
		ejs.__express(filePath, options, function(err, html) {
			if (err) return callback(err);
			callback(null, htmlMinify(html, minifyConfig));
		});
	});

	app.set('views', 'views');
	app.set('layout', 'layouts/default');
	app.use(expressLayouts);
	app.set('view engine', 'ejs');
	app.use(compress());
	app.use(bodyParser.json());
	if (app.get('env') === "prod") app.enable('view cache');

	app.use(favicon('./public/favicon/favicon.ico'));
	app.use(morgan('dev'));

	if (app.get('env') === "dev") {
		app.use(expressStatic('./public'));
	}
};
