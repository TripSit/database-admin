import type { Config } from 'jest';

const jestConfig: Config = {
  testMatch: [
    '<rootDir>/**/*.test.js',
  ],
  collectCoverage: true,
  coverageDirectory: './src/testing/coverage',
  collectCoverageFrom: [
    './dist/apiV1/**/*',
    './dist/apiV2/**/*',
  ],
  coveragePathIgnorePatterns: [
    '/node_modules/',
  ],
  testEnvironment: 'node',
  clearMocks: true,
  rootDir: '../../',
};

export default jestConfig;
