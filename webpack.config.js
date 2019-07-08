const path = require("path");
var nodeExternals = require("webpack-node-externals");
module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "src") + "/app.js",
  target: "node",
  externals: [nodeExternals()],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
    proxy: {
      "/": {
        target: "http://localhost:8080",
        secure: false
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  }
};
