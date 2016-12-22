var common = require('../common.js');
module.exports = function (app) {
  app.all('/example/:slug', function (req, res) {
    var slug = req.params.slug;
    res.params.title = 'Example: Express, Pug and Sass';
    res.params.message = 'Page ' + common.toHtmlStrong(slug);
    res.render('index', res.params);
  });
}