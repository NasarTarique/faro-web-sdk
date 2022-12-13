const { jestBaseConfig } = require('../../jest.config.base.js');

module.exports = {
  ...jestBaseConfig,
  roots: ['web-sdk/src'],
  testEnvironment: 'jsdom',
};
