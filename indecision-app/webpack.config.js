const path = require('path');

module.exports = (env) => {
  const isProduction = env == 'production';

  return {
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
      }],
    },
    devtool: isProduction ? 'source-map' : 'cheap-module-eval-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
    },
  };
}
