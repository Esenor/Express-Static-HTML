module.exports = function (req, res, next) {
  res.params = {};
  res.params.base = {
    url: req.protocol + '://' + req.get('host')
  }
  res.params.stylesheet = {
    main: res.params.base.url + '/styles/main.css'
  }
  next();
}