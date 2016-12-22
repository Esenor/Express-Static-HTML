var express = require('express');
var path = require('path');
var sassMiddleware = require('node-sass-middleware');
var app = express();
var port = 80;
// Register server
var server = app.listen(port, function () {
  console.log('express server up on ' + port);
});
// Register Pug engine template
app.set('views', __dirname + '/views');
app.set('view engine', 'pug');
// Register SASS middleware
app.use('/styles', sassMiddleware({
  src: __dirname + '/sass',
  dest: '../static/styles',
  debug: true,
  outputStyle: 'compressed'
}));
// Register global params middleware
app.use(function (req, res, next) {
  res.params = {};
  res.params.base = {
    url: req.protocol + '://' + req.get('host')
  }
  res.params.stylesheet = {
    main: res.params.base.url + '/styles/main.css'
  }
  next();
});
// Register static folder
app.use(express.static('../static'));
// Base routes
app.all('/example', function (req, res) {
  res.params.title = 'Example: Express, Pug and Sass';
  res.params.message = 'Example page';
  res.render('index', res.params);
}); 
app.all('*', function (req, res) {
  res.params.title = 'Express, Pug and Sass';
  res.params.message = 'lorem <strong>ipsum</strong> en <i>dolo del</i> assarim en todho.';
  res.render('index', res.params);
});
