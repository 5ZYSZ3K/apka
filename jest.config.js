module.exports = {
  testTimeout: 30000,
  projects: ['<rootDir>/packages/app/jest.config.js'],
  coverageDirectory: '<rootDir>/coverage/',
  collectCoverageFrom: [
    '<rootDir>/packages/app/src/**/*.{ts,tsx}',
    '!<rootDir>/packages/app/src/**/__tests__/**',
  ],
  coverageReporters: ['lcov', 'cobertura', 'text'],
  moduleNameMapper: {
    '.json$': 'identity-obj-proxy',
  },
  moduleDirectories: ['node_modules'],
};
