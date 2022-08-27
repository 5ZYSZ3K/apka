module.exports = {
  testTimeout: 30000,
  projects: ['<rootDir>/apps/*/jest.config.js'],
  coverageDirectory: '<rootDir>/coverage/',
  collectCoverageFrom: [
    '<rootDir>/packages/app/src/**/*.{ts,tsx}',
    '!<rootDir>/packages/app/src/**/__tests__/**',
  ],
  coverageReporters: ['lcov', 'cobertura', 'text'],
  moduleDirectories: ['node_modules'],
  transformIgnorePatterns: ['node_modules/(?!react-native|@react-native/(.*))'],
};
