var assign = require('object-assign')

var loaders = require('./loaders')
var plugins = require('./plugins')
var resolve = require('./resolve')
var env = require('./env')
var externals = assign({}, require('./externals'));
var entry = require('./entry')

externals.react = 'React';
externals['react-dom'] = 'ReactDOM';

module.exports = {
  bail: true,
  entry: entry,
  output: {
    path: __dirname + '/../dist',
    publicPath: env.PUBLIC_PATH || './',
    filename: '[name].js'
  },
  plugins: plugins,
  module: {
    loaders: loaders,
  },
  externals: externals,
  resolve: resolve
}
