import {
  es5,
  es6
} from '../../src/features/modules'
import validator from 'validator'

export default function() {
  it('should require and use "uuid" module in ES5', () => {
    validator.isUUID(es5(), 4).should.eql(true)
  })

  it('should import and use "uuid" module in ES6', () => {
    validator.isUUID(es6(), 4).should.eql(true)
  })
}
