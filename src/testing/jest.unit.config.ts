import type { Config } from 'jest';

const jestConfig: Config = {
  testMatch: [
    // '<rootDir>/**/*.test.js',
    '<rootDir>/build/apiV1/*.test.js',
  ],
  collectCoverage: false,
  coverageDirectory: './src/testing/coverage',
  collectCoverageFrom: [
    './build/apiV1/**/*',
    './build/apiV2/**/*',
  ],
  coveragePathIgnorePatterns: [
    '/node_modules/',
  ],
  testEnvironment: 'node',
  clearMocks: true,
  rootDir: '../../',
};

export default jestConfig;
