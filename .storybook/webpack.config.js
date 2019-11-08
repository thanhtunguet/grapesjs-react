module.exports = ({config}) => {
  config.entry = "./.storybook/config.tsx";
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve("awesome-typescript-loader"),
    options: {
      presets: [
        [
          "react-app",
          {
            flow: false,
            typescript: true,
          },
        ],
      ],
    },
  });
  config.resolve.extensions.push(".ts", ".tsx");
  return config;
};
