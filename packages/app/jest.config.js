module.exports = {
  preset: 'react-native-web',
  rootDir: '../../',
  displayName: {
    name: 'WEB',
    color: 'white',
  },

  moduleFileExtensions: ['web.ts', 'web.tsx', 'ts', 'tsx', 'js'],
  moduleNameMapper: {
    '\\.svg': '<rootDir>/packages/web/jest/svg-mock.js',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/packages/web/jest/image-mock.js',
    '^@/(.*)$': '<rootDir>/packages/web/src/$1',
    '^@testing-library/react-native$': '@testing-library/react',
    '^@testing-library/jest-native$': '@testing-library/jest-dom',
  },
  testEnvironment: 'jest-environment-jsdom',
  testPathIgnorePatterns: ['.next/', 'dist/', 'node_modules/'],
  transformIgnorePatterns: [
    'node_modules/(?!react-native|@react-native-community/(.*)|@react-navigation/(.*))',
    'node_modules/(?!(jest-)?react-native|react-(native|universal|navigation)-(.*)|@react-native-community/(.*)|@react-navigation/(.*)|bs-platform)',
  ],
  testMatch: ['<rootDir>/packages/app/**/__tests__/**/*test*.ts(x)'],
};
