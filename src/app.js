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
app.use(require('./middleware/globalParams.js'));
// Register static folder
app.use(express.static('/usr/src/app/static'));
// Register routes
require('./router/example.js')(app);
require('./router/all.js')(app);