module.exports = {
  verbose: true,
  transform: {
    '^.+\\.ts$': 'ts-jest'
  },
  moduleNameMapper: {
    /** @see https://stackoverflow.com/a/74297004 */
    '^axios$': 'axios/dist/node/axios.cjs'
  },
  testRegex: '(/__tests__/.*|(\\.|/)test)\\.ts$',
  testPathIgnorePatterns: ['/node_modules/'],
  moduleFileExtensions: ['ts', 'js', 'json'],
  testEnvironment: 'node'
}
