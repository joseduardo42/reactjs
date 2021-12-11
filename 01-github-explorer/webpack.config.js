const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');


const isDevlopment = process.env.NODE_ENV !== 'production';

/* exporta objeto de config */
module.exports = {
  mode: isDevlopment ? 'development':'production',
  devtool: isDevlopment ? 'eval-source-map' : 'source-map',
  entry: path.resolve(__dirname, 'src', 'index.jsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    hot: true,
  },
  plugins: [
    isDevlopment && new ReactRefreshWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html')
    })
  ].filter(Boolean),
  module: {
    rules:[
      {
        test: /\.jsx$/, /* importar arquivo jsx */
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',/* converter para browser */
          options: {
            plugins: [
              isDevlopment && require.resolve('react-refresh/babel')
            ].filter(Boolean),
          },
        },
      },
      {
        test: /\.scss$/, /* importar arquivo jsx */
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader'], /* converter para browser */
      }
    ],
  }
};
  

