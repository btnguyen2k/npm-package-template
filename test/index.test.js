import {sayHello} from '../src/index.js'

describe('sayHello', () => {
  beforeEach(() => {
    // Reset options before each test.
    console.log('DEBUG - beforeEach')
  })

  afterEach(() => {
    // Reset options after each test.
    console.log('DEBUG - afterEach')
  })

  test('demo', () => {
    expect(sayHello('demo')).toEqual('Hello demo')
  })
})
