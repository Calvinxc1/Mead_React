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
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    host: '0.0.0.0',
    disableHostCheck: true,
    contentBase: path.join(__dirname, 'public'),
    public: 'karan.local.newedenanalytics.net:54343/'
  },
};
