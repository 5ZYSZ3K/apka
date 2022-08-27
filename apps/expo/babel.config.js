const path = require('path');

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['babel-plugin-transform-class-properties'],
    ['@babel/plugin-proposal-class-properties'],
    ['@babel/plugin-proposal-decorators', {legacy: true}],
    ['@babel/plugin-transform-flow-strip-types', {loose: false}],
    [
      'module-resolver',
      {
        root: ['./'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ios.tsx',
          '.android.tsx',
          '.js',
          '.ts',
          '.tsx',
          '.json',
        ],
        alias: {
          '@app': path.resolve(__dirname, '../../packages/app'),
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
