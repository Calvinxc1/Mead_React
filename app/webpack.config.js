const path = require('path');

module.exports = {
  entry: './src/app.jsx',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.jsx$/,
      exclude: /node_modules/,
    }]
  },
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    host: '0.0.0.0',
    contentBase: path.join(__dirname, 'public'),
    disableHostCheck: true,
  },
};
