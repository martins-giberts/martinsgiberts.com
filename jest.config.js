module.exports = {
  coverage: true,
  modulePaths: [
    '/app'
  ],
  moduleFileExtensions: [
    'js',
    'jsx'
  ],
  moduleDirectories: [
    'node_modules'
  ],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/fileMock.js',
    '\\.(css)$': 'identity-obj-proxy'
  },
  unmockedModulePathPatterns: [
    'node_modules/react/',
    'node_modules/enzyme/'
  ],
  snapshotSerializers: [
    '<rootDir>/node_modules/enzyme-to-json/serializer'
  ],
  coveragePathIgnorePatterns: [
    '<rootDir>/node_modules',
    '<rootDir>/app/index.js'
  ],
  collectCoverageFrom: [
    'app/**/*.{js,jsx}'
  ],
  transform: {
    '.*': './node_modules/babel-jest'
  },
  rootDir: './'
}
