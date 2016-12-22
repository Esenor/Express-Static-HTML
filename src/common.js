module.exports = {
  toHtmlStrong: function (text) {
    return ['<strong>', text, '</strong>'].join('');
  },
  toHtmlItalic: function (text) {
    return ['<i>', text, '</i>'].join('');
  }
}