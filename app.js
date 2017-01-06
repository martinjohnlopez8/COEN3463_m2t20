var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Schema = mongoose.schema;
var fs = require('fs');
var uri = 'mongodb://martin:123123@ds050739.mlab.com:50739/m2t20'

var index = require('./routes/index');
var services = require('./routes/services');
var about = require('./routes/about');
var contact = require('./routes/contact');

var app = express();

mongoose.Promise = global.Promise;
var db = mongoose.connect(uri);

//load all files in models dir
fs.readdirSync(__dirname + '/models').forEach(function(filename) {
  if (~filename.indexOf('.js')) require(__dirname + '/models/' + filename)
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(favicon(path.join(__dirname, 'public', 'favicon.png')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/services', services);
app.use('/about', about);
app.use('/contact', contact);

//app.use(function(req,res,next){
  //req.database = database;
  //next();
//});


//load all files in models dir
//fs.readdirSync(__dirname + '/models').forEach(function(filename) {
  //if (~filename.indexOf('.js')) require(__dirname + '/models/' + filename)
//});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});

// error handler
app.use(function(err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error');
});

module.exports = app;