const __IS_E2E = process.argv.indexOf("--e2e") !== -1;
// const __IS_PRODUCTION = process.env.NODE_ENV === "production";
const __IS_DEVELOPMENT = process.env.NODE_ENV === "development" && !__IS_E2E;
const __BASE_PATH = process.env.BASE_PATH || "";

const webpack = require("webpack");
const path = require("path");
const pkg = require("./package.json");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  favicon: __IS_DEVELOPMENT
    ? "./src/assets/images/favicon.dev.png"
    : "./src/assets/images/favicon.png",
  template: "./src/index.html",
  filename: "index.html",
  inject: "body"
});

const WebpackDefinePlugin = new webpack.DefinePlugin({
  __CLIENT__: true,
  __SERVER__: false,
  __DEVELOPMENT__: __IS_DEVELOPMENT,
  __BASE_PATH__: JSON.stringify(__BASE_PATH),
  __DEVTOOLS__: !__IS_E2E, // <-------- DISABLE devtools HERE
  __FRONTEND_VERSION__: JSON.stringify(pkg.version),
  __E2E__: __IS_E2E,
  "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV || "production")
});

const CleanWebpackPlugin = require("clean-webpack-plugin");

const CommonsChunkPluginRuntime = new webpack.optimize.CommonsChunkPlugin({
  name: "runtime"
});

const CommonsChunkPluginVendor = new webpack.optimize.CommonsChunkPlugin({
  name: "vendor",

  minChunks: function(module) {
    // this assumes your vendor imports exist in the node_modules directory
    return module.context && module.context.indexOf("node_modules") >= 0;
  }
});

module.exports = {
  output: {
    path: path.join(__dirname, "build/release"),
    filename: "dist/js/[name].[chunkhash].js",
    chunkFilename: "[chunkhash].bundle.js",
    publicPath: __BASE_PATH + "/"
  },
  resolve: {
    modules: ["node_modules", path.resolve(__dirname, "src")]
  },
  devtool: "cheap-module-eval-source-map",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        }),
        exclude: /flexboxgrid/
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [{ loader: "css-loader", query: { modules: true } }]
        }),
        include: /flexboxgrid/
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg|png|jpg)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "dist/assets/[hash].[ext]"
          }
        }
      },
      {
        test: /\.json$/,
        use: ["json-loader"],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    HtmlWebpackPluginConfig,
    WebpackDefinePlugin,
    new ExtractTextPlugin("dist/css/[name].[contenthash].css"),
    new CleanWebpackPlugin(["build"]),
    CommonsChunkPluginVendor,
    CommonsChunkPluginRuntime
    // new DashboardPlugin()
  ]
};
