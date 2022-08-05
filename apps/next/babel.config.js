const dotenv = require('dotenv');
const path = require('path');

const envFilePath = path.resolve(__dirname, '../../env/current.env');
const parsedEnv = dotenv.config({path: envFilePath}).parsed;

const environment = Object.keys(parsedEnv).reduce(
  (result, key) => {
    result[`process.env.${key}`] = parsedEnv[key];
    return result;
  },
  {
    ['process.env.APP_VERSION']: process.env.npm_package_version,
  },
);

module.exports = {
  presets: ['next/babel'],
  plugins: [
    ['react-native-web', {commonjs: true}],
    [
      'babel-plugin-styled-components',
      {ssr: true, displayName: true, preprocess: false},
    ],
    [
      'module-resolver',
      {
        alias: {
          '^react-native$': 'react-native-web',
          'react-native-svg$':
            'react-native-svg/lib/module/ReactNativeSVG.web.js',
        },
      },
    ],
    ['transform-define', environment],
    ['@babel/plugin-proposal-class-properties', {loose: true}],
    ['@babel/plugin-proposal-private-methods', {loose: true}],
    ['@babel/plugin-proposal-private-property-in-object', {loose: true}],
    'react-native-reanimated/plugin',
  ],
  sourceType: 'module',
};
