const WebpackSourcemapSupport = require("webpack-source-map-support");
const WebpackNodeExternals = require("webpack-node-externals");
const tsNameOf = require("ts-nameof");
const {resolve} = require("path");

module.exports = {
  mode: process.env.NODE_ENV,
  entry: {
    "grapesjs-react": resolve("src", "grapesjs-react.tsx"),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader",
        options: {
          getCustomTransformers: () => ({before: [tsNameOf]}),
        },
      },
    ],
  },
  resolve: {
    extensions: [
      ".ts",
      ".tsx",
    ],
    modules: [
      "node_modules/",
      "src/",
    ],
  },
  externals: [
    new WebpackNodeExternals(),
  ],
  plugins: [
    new WebpackSourcemapSupport(),
  ],
  output: {
    path: resolve("dist"),
    filename: "[name].js",
  },
  devtool: "source-map",
};
