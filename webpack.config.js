const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/app.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/bundle.js"
  },
  module: {
    loaders: [{
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract({
        fallback: "style-loader",
        use: ["css-loader", "sass-loader"]
      })
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel-loader"
    }]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: "css/style.css",
      allChunks: true
    }),
    new HtmlWebpackPlugin({
      template: "src/index.ejs"
    }),
    new HtmlWebpackPlugin({
      filename: "trello.html",
      template: "src/trello.html"
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 8080
  }
};
