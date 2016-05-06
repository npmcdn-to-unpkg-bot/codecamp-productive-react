var ExtractTextPlugin = require('extract-text-webpack-plugin');
var env = require('./env');
var path = require('path')


var LOCAL_CSS_LOADER = 'style-loader!css-loader?modules&localIdentName=[local]--[hash:base64:5]!autoprefixer-loader!sass-loader'
var NM_CSS_LOADER = 'style-loader!css-loader!postcss-loader'

var dev = env.HOT || env.NODE_ENV == 'development'

function extract(str){
  var loaders = str.split('!');
  var styleLoader = loaders[0];
  var restOfLoaders = loaders.slice(1).join('!');

  return ExtractTextPlugin.extract(styleLoader, restOfLoaders);
}

module.exports = [
  {
    test: /\.js$/,
    exclude: /node_modules/,
    loaders: [dev && 'react-hot', 'babel'].filter(function(x){ return !!x})
  },
  {
    test: /\.global\.css$/,
    exclude: /node_modules/,
    loader: dev?
            NM_CSS_LOADER:
            extract(NM_CSS_LOADER)
  },
  {
    test: /\.css$/,
    exclude: /(node_modules|\.global\.css$)/,
    loader: dev?
            LOCAL_CSS_LOADER:
            extract(LOCAL_CSS_LOADER)
  },
  {
    test: /\.css$/,
    exclude: /(src|app_modules)/,
    include: /node_modules/,
    loader: dev?
              NM_CSS_LOADER:
              extract(NM_CSS_LOADER)
  },
  {
    test: /.md$/,
    exclude: /node_modules/,
    loaders: ['html','markdown']
  },

  {
    test: /\.(png|ico|jpg|jpeg|gif|svg)$/,
    exclude: /node_modules/,
    loader: 'file-loader?name=img/[name]-[hash:6].[ext]'
  },
  {
    test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    loader: 'url-loader?limit=10000&minetype=application/font-woff&name=font/[name]-[hash:6].[ext]'
  },
  {
    test: /\.(ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    loader: 'file-loader?name=font/[name]-[hash:6].[ext]'
  }
  // ,
  // {
  //   test: [/\.svg/, /\.woff/, /\.(jpg)$/, /\.jpeg/, /\.ttf/, /\.eot/, /\.png/, /\.gif/],
  //   loader: 'file-loader?name=img/[name]-[hash:6].[ext]'
  // }
]
