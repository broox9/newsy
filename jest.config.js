module.exports = {
  verbose: true,
  collectCoverageFrom: ['src/**/*.js', '!**/*.styles.js', '!**/*.fixture.js'],
  globals: {}, //global vars available to all tests
  testEnvironment: 'jsdom' //if using for node use 'node'
}