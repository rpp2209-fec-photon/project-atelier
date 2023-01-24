const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const SRC_DIR = path.join(__dirname, "./client/src");
const DIST_DIR = path.join(__dirname, "./client/dist");

module.exports = {
  mode: 'development',
  entry: `${SRC_DIR}/index.jsx`,
  devtool: 'inline-source-map',
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: './client/src/style.css', to: '' },
        { from: './client/src/resources', to: './resources' }
      ]
    }),
  ],
}