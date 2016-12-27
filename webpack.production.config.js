var webpack = require('webpack')
var path = require('path')
var autoprefixer = require('autoprefixer')
var SRC_PATH = path.resolve(__dirname, 'src')
var node_modules_dir = path.resolve(__dirname, 'node_modules')

var config = {
  devtool: false,
  context: SRC_PATH,
  entry: {
    main: ['babel-polyfill', './main.js'],
    html: './index.html'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.html$/,
      loader: 'file?name=[name].[ext]'
    }, {
      test: /\.(png|jpg)$/,
      loader: 'url-loader?limit=8192'
    }, {
      test: /\.js$/,
      loader: 'babel'
    },{
      test: /\.(scss|css)$/,
      loaders: ['style', 'css', 'postcss', 'sass'],
    },{
      test: /\.eot/,loader : 'file?prefix=&name=font/[name].[ext]'},
      {test: /\.woff/,loader : 'file?prefix=&limit=10000&mimetype=font/application/font-woff&name=font/[name].[ext]'},
      {test: /\.ttf/, loader : 'file?prefix=&name=font/[name].[ext]'},
      {test: /\.svg/, loader : 'file?prefix=&name=font/[name].[ext]'
    }]
  },
  resolve: {
    extensions: ['', '.js', '.css', '.scss']
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
    compress: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
        'process.env': { NODE_ENV: JSON.stringify('production') }
    })
  ],
  postcss:[
    autoprefixer({
      browsers: ['>0%']
    })
  ]
}

module.exports = config
