const webpack = require("webpack");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  entry: {
    app: ["babel-polyfill", "react-hot-loader/patch", "./src/index.js"]
  },
  output: {
    filename: "dist/js/[name].js"
  },
  devtool: "cheap-module-eval-source-map",
  devServer: {
    host: "0.0.0.0",
    open: false,
    port: 3000,
    publicPath: common.output.publicPath,
    historyApiFallback: { disableDotRule: true }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ["react-hot-loader/webpack", "babel-loader"],
        exclude: /node_modules\/(?!(mic-shared|redux-matchmedia)\/).*/
      }
    ]
  },
  plugins: [new webpack.NamedModulesPlugin()]
});
