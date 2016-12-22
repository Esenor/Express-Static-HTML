var common = require('../common.js');
module.exports = function (app) {
  app.all('*', function (req, res) {
    res.params.title = 'Express, Pug and Sass';
    var message = [
      'lorem',
      common.toHtmlStrong('ipsum'),
      'en',
      common.toHtmlItalic('dolo del'),
      'assarim en todho.'
    ].join(' ');
    res.params.message = message;
    res.render('index', res.params);
  });
}