var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();

// connect Data Base
require('./lib/connectMongoose');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.engine('html', require('ejs').__express);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/**
 * Global Variables
 */
app.locals.title = 'NodePOP';

/**
 * Setup i18n
 */

const i18n = require('./lib/i18nConfig')();
app.use(i18n.init);

i18n.setLocale('en');
console.log(i18n.__('Welcome to'));

/**
 *  WEBSITE ROUTES
 */
app.use('/', require('./routes/index'));
app.use('/changeLang', require('./routes/changeLang'));

const loginController = require('./routes/loginController');
const jwtAuth = require('./lib/jwtAuth');

/**
 *  API ROUTES
 */
app.use('/apiv1/ads', jwtAuth(), require('./routes/apiv1/ads'));
app.use('/apiv1/tags', jwtAuth(), require('./routes/apiv1/tags'));
app.use('/apiv1/login', loginController.postJWT);
app.use('/apiv1/createUser', require('./routes/apiv1/createUser'));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  res.status(err.status || 500);

  if (isAPIRequest(req)) {
    res.json({ error: err.message });
    return;
  }
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.render('error');
});

const isAPIRequest = (req) => {
  return req.originalUrl.startsWith('/api/');
};

module.exports = app;
