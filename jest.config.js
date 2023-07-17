export default {
  restoreMocks: true,
  clearMocks: true,
  // collectCoverage: true,
  collectCoverageFrom: [
    'src/index.js'
  ],
  coverageDirectory: 'coverage',
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90
    }
  },
  testRegex: /\.test\.jsx?$/.source,
  transform: {
    '\\.[jt]sx?$': 'babel-jest',
  },
  transformIgnorePatterns: [
    'node_modules/(?!'
    + [
      '<changeme>',
    ].join('|')
    + ')',
  ]
}
