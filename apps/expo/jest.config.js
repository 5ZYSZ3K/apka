module.exports = {
  preset: 'react-native',
  rootDir: '../../',
  displayName: {
    name: 'MOBILE',
    color: 'cyan',
  },
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  moduleNameMapper: {
    '^@app/(.*)$': '<rootDir>/packages/app/$1',
    '^@expo/(.*)$': './$1',
  },
  transform: {
    '^.+\\.(ts|tsx)$': ['@swc/jest', {sourceMaps: false}],
    '^.+.js$': '<rootDir>/apps/next/jest/transform.js',
  },
};
