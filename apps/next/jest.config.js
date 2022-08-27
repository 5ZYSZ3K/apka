module.exports = {
  preset: 'react-native',
  rootDir: '../../',
  displayName: {
    name: 'WEB',
    color: 'white',
  },
  moduleFileExtensions: ['web.ts', 'web.tsx', 'ts', 'tsx', 'js'],
  moduleNameMapper: {
    '^@app/(.*)$': '<rootDir>/packages/app/$1',
    '^@next/(.*)$': './$1',
  },
  transform: {
    '^.+\\.(ts|tsx)$': ['@swc/jest', {sourceMaps: false}],
    '^.+.js$': '<rootDir>/apps/next/jest/transform.js',
  },
  testMatch: ['<rootDir>/packages/app/**/__tests__/**/*test*.ts(x)'],
};
