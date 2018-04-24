const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin');

let pathsToClean = [
  'dist'
]
let cleanOptions = {
  root: __dirname,
  verbose: true
}

const extractSass = new ExtractTextPlugin('style.[chunkhash].css', {
  allChunks: false
})

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.[chunkhash].js'
  },
  module: {
    loaders: [
      {
          test: /\.js|svg$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          query: {
            presets: ['es2015', 'react']
          }
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
      },
      {
        test: /\.svg$/,
        loader: 'react-svg-loader'
      }
    ]
  },
  stats: {
    colors: true
  },
  plugins: [
    new CleanWebpackPlugin(pathsToClean, cleanOptions),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    extractSass,
    new HtmlWebpackPlugin({
      template: 'src/templates/index.ejs'
    }),
    new CopyWebpackPlugin([
      { from: 'src/static/images/gallery', to: 'images/gallery' },
      { from: 'src/static/images/icons', to: 'images/icons' },
      { from: 'src/static/images/icons/favicon.ico', to: 'favicon.ico' }
    ])
  ]
}
