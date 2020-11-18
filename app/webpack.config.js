const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (env) => {
  const isProduction = env == 'production';
  const CSSExtract = new ExtractTextPlugin('styles.css');

  return {
    entry: './src/app.jsx',
    output: {
      path: path.join(__dirname, 'public', 'dist'),
      filename: 'bundle.js',
    },
    module: {
      rules: [{
        loader: 'babel-loader',
        test: /\.jsx$/,
        exclude: /node_modules/,
      },{
        use: CSSExtract.extract({use: [{
          loader: 'css-loader',
          options: {sourceMap: true},
        },{
          loader: 'sass-loader',
          options: {sourceMap: true},
        }]}),
        test: /\.s?css$/,
      }]
    },
    plugins: [CSSExtract],
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    devServer: {
      host: '0.0.0.0',
      disableHostCheck: true,
      contentBase: path.join(__dirname, 'public'),
      public: 'karan.local.newedenanalytics.net:54343/',
      publicPath: '/dist/',
      historyApiFallback: true,
    },
  };
};
