var precss = require('precss');
var autoprefixer = require('autoprefixer');

module.exports = function () {
  return [autoprefixer, precss];
}