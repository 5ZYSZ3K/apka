const babelJest = require('babel-jest').default;

const babelOptions = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
  plugins: [
    ['react-native-web', {commonjs: true}],
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-transform-flow-strip-types',
  ],
};

module.exports = babelJest.createTransformer(babelOptions);
