const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractSass = new ExtractTextPlugin('style.[chunkhash].css', {
  allChunks: false,
  disable: true
})

module.exports = {
  entry: [
    './src/index.js',
    'webpack-dev-server/client?http://0.0.0.0:8081',
    'webpack/hot/only-dev-server'
  ],

  output: {
    path: '/',
    filename: 'index.js'
  },

  devServer: {
    hot: true,
    filename: 'index.js',
    publicPath: '/',
    historyApiFallback: true,
    contentBase: './dist'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    extractSass,
    new HtmlWebpackPlugin({
      template: 'src/templates/index.ejs'
    })
  ],

  module: {
    loaders: [
      {
        test: /\.(js|svg)$/,
        loaders: ['react-hot-loader/webpack', 'babel-loader?' + JSON.stringify({
          cacheDirectory: true,
          presets: ['es2015', 'react']
        })],
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(`css-loader?modules&importLoaders=2&localIdentName=[name]_[local]__[hash:base64:5]!sass-loader`)
        },
      {
        test: /\.(jpe?g|JPG|png|gif)$/i,
        loader: 'responsive-loader',
        options: {
           adapter: require('responsive-loader/sharp'),
           limit: 8192,
           name: 'images/[name].[ext]'
        }
      }
    ]
  }
};