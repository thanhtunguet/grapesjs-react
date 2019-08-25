module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve('awesome-typescript-loader'),
    options: {
      presets: [
        [
          'react-app',
          {
            flow: false,
            typescript: true,
          },
        ],
      ],
    },
  });
  config.resolve.extensions.push('.ts', '.tsx');
  return config;
};
