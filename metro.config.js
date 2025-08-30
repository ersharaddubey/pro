// metro.config.js
const { getDefaultConfig } = require('expo/metro-config');

module.exports = (() => {
  const config = getDefaultConfig(__dirname);
  config.resolver.sourceExts = ['js', 'jsx', 'ts', 'tsx', 'cjs'];
  config.transformer.babelTransformerPath = require.resolve('metro-react-native-babel-transformer');
  config.resolver.blacklist = [
    /node_modules\/.*\/\.babelrc/,
    /node_modules\/.*\/babel\.config\.js/,
  ];
  return config;
})();
