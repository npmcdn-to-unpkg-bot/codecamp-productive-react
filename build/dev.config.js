
var loaders = require('./loaders')
var resolve = require('./resolve')
var path = require('path')
var plugins = require('./plugins')
var postcss = require('./postcss')

var env = require('./env')


module.exports = {
  entry: require('./entry'),
  // devtool: 'source-map',
  // bail: true,
  // watchPoll: true,
  // colors: true,
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM'
  },
  module: {
    loaders: loaders,
    postcss: postcss
  },
  resolve: resolve,
  output: {
    // path: path.join(__dirname, 'dist'),
    // filename: 'bundle.js',
    publicPath: '/assets/',
  },
  plugins: plugins,
  devServer: {
    publicPath: '/assets/',
    // filename: 'bundle.js',
    port: env.PORT,
    host: '0.0.0.0',
    historyApiFallback: true
  }
}
