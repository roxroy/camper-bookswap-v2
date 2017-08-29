const path = require('path');
let ExtractTextPlugin = require("extract-text-webpack-plugin");
let ExtractSASS = new ExtractTextPlugin('/styles/app.css');
let HtmlWebpackPlugin = require('html-webpack-plugin');


const dir_js = path.resolve(__dirname, 'client/js'),
      dir_cs = path.resolve(__dirname, 'client/css');
//let dir_html = path.resolve(__dirname, 'html');
let dir_build = path.resolve(__dirname, 'public/build');

module.exports = {
  entry: path.resolve(dir_js, 'main.js'),
  entry: [
    path.resolve(dir_js, 'main.js'),
    path.resolve(dir_cs, 'main.scss')
  ],
  output: {
    path: dir_build,
    filename: 'app.js'
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        test: dir_js,
      },
      { // regular css files
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
            use: 'css-loader?importLoaders=1',
        }),
      },
      { // sass / scss loader for webpack
          test: /\.(sass|scss)$/,
          use: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
      },
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, use: "file"},
      {test: /\.(woff|woff2)$/, use: "url?prefix=font/&limit=5000"},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, use: "url?limit=10000&mimetype=application/octet-stream"},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, use: "url?limit=10000&mimetype=image/svg+xml"}
    ]
  },
  plugins: [
      new ExtractTextPlugin("app.css")
  ],
  // Create Sourcemaps for the bundle
  devtool: 'source-map',
};