module.exports = {
  presets: [
    'next/babel',
    ['babel-preset-expo', {jsxRuntime: 'automatic'}],
    '@babel/preset-env',
  ],
  plugins: [
    ['@babel/plugin-proposal-class-properties', {loose: true}],
    ['@babel/plugin-proposal-private-methods', {loose: true}],
    ['@babel/plugin-proposal-private-property-in-object', {loose: true}],
    'react-native-reanimated/plugin',
    'react-native-paper/babel',
  ],
};
