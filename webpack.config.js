const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin')

const extractSass = new ExtractTextPlugin('style.[chunkhash].css', {
  allChunks: false
})

let pathsToClean = [
  'dist'
]
let cleanOptions = {
  root: __dirname,
  verbose: true
}

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.[chunkhash].js'
  },
  module: {
      loaders: [
        {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
              presets: ['es2015', 'react']
            }
        },
        {
          test: /\.scss$/,
          loader: ExtractTextPlugin.extract(`css-loader?minimize&modules&importLoaders=2&localIdentName=[name]_[local]__[hash:base64:5]!sass-loader`)
        },
        {
          test: /\.(jpe?g|png|gif)$/i,
          loader: 'responsive-loader',
          options: {
             adapter: require('responsive-loader/sharp'),
             limit: 8192,
             name: 'images/[name].[ext]'
          }
        },
        {
          test: /\.svg$/,
          use: [
            {
              loader: 'react-svg-loader'
            }
          ]
        }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(pathsToClean, cleanOptions),
    extractSass,
    new HtmlWebpackPlugin({
      template: 'src/templates/index.ejs'
    })
  ]
}
