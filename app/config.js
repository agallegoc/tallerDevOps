"use strict";

var bodyParser = require('body-parser');
var favicon = require('serve-favicon');
var ejs = require('ejs');
var session = require('cookie-session');
var morgan = require('morgan');

module.exports = function(app) {
    app.set('port', process.env.PORT || 3000);
    app.set('ip', process.env.IP || "127.0.0.1");

    app.set('views', 'views');
    app.set('view engine', 'ejs');

    app.use(session({
        secret: 'miclavesecreta'
    }))

    app.use(bodyParser.json());

    //app.use(favicon('./public/favicon/favicon.ico'));
    app.use(morgan('dev'));

    if (app.get('env') === "dev") {
        app.use(expressStatic('./public'));
    }
};
