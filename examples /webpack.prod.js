const webpack = require("webpack");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");

module.exports = merge(common, {
  entry: {
    app: ["babel-polyfill", "./src/index.js"]
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ["babel-loader"],
        exclude: /node_modules\/(?!(mic-shared|redux-matchmedia)\/).*/
      }
    ]
  },
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true,
      parallel: true
    }),
    new webpack.HashedModuleIdsPlugin()
  ]
});
