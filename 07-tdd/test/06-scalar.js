var should = require('should')
var scalar = require('../src/06-scalar.js')

describe('adams scalar', function() {

  it('should take number as input', function() {
    should(scalar(123)).be.a.Number()
  })

  it('should take string as input', function() {
    should(scalar('foo')).be.a.String()
  })

  it('should take boolean as input', function() {
    should(scalar(true)).be.a.Boolean()
  })

  it('should not take null as input', function() {
    (function() {
      scalar(null)
    }).should.throw()
  })

  it('should not take an object as input', function() {
    (function() {
      scalar({})
    }).should.throw()
  })

})
