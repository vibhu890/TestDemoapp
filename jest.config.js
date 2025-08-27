module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.js'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(ts|html)$': ['ts-jest', {
      tsconfig: '<rootDir>/tsconfig.spec.json',
      useESM: true,
      stringifyContentPathRegex: '\\.html$'
    }]
  },
  moduleFileExtensions: ['ts', 'html', 'js', 'json'],
  transformIgnorePatterns: [
    'node_modules/(?!.*\\.mjs$)'
  ]
};
