module.exports = ({config}) => {
  return {
    ...config,
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: [
            {
              loader: require.resolve("awesome-typescript-loader"),
            },
          ],
        },
        {
          test: /\.s?css$/,
          use: [
            "style-loader",
            "css-loader",
            "sass-loader",
          ],
        },
        {
          test: /\.(svg|woff|woff2|ttf|eot|jpeg|gif|jpg|png)$/,
          use: [
            "file-loader",
          ],
        },
      ],
    },
    devtool: "source-map",
    resolve: {
      extensions: [
        ".tsx",
        ".ts",
        ".js",
        ".jsx",
        ".min.js",
      ],
      modules: [
        "node_modules/",
        "src/",
        ".storybook",
      ],
    },
  };
};
