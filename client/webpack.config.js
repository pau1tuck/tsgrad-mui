const path = require("path");

module.exports = {
  entry: "./src/index",
  target: "web",
  output: {
    path: path.resolve(__dirname, "static/client"),
    filename: "index.js",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },
};
