var path = require('path')
var opn = require('opn')
var autoprefixer = require('autoprefixer')
var SRC_PATH = path.resolve(__dirname, 'src')

var port = 12333
opn(`http://localhost:${port}/`)

var config = {
  devtool: 'inline-source-map',
  context: SRC_PATH,
  entry: {
    main: ['babel-polyfill', './main.js'],
    html: './index.html'
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: `http://localhost:${port}/`,
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.html$/,
      loader: 'file?name=[name].[ext]'
    },{
      test: /\.(png|jpg)$/,
      loader: 'url-loader?limit=8192'
    },{
      test: /\.(wav|mp3)$/,
      loader: 'url-loader'
    },{
      test: /\.js$/,
      loader: 'babel'
    },{
      test: /\.(scss|css)$/,
      loaders: ['style', 'css?sourceMap', 'postcss', 'sass'],
    },{
      test: /\.eot/,loader : 'file?prefix=font/'},
      {test: /\.woff/,loader : 'file?prefix=font/&limit=10000&mimetype=application/font-woff'},
      {test: /\.ttf/, loader : 'file?prefix=font/'},
      {test: /\.svg/, loader : 'file?prefix=font/'
    }]
  },
  resolve: {
    extensions: ['', '.js', '.css', '.scss']
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    port: port
  },
  postcss:[
    autoprefixer({
      browsers: ['>0%']
    })
  ]
}

module.exports = config
