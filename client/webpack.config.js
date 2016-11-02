var webpack = require('webpack');

module.exports = [{
  entry: './client/browser.js',
  output: {
    path: './client/assets',
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.DefinePlugin({"process.env": { NODE_ENV: JSON.stringify("production") }}),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false }, sourceMap: false })
  ],
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel'},
      { test: /\.css$/, loader: "style-loader!css-loader"}
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
}];