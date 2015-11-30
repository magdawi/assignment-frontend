var should = require('should')
var setup = require('../src/07-setup.js')

describe('adams setup', function() {
	var testArray

	beforeEach(function() {
		testArray = [1, 2, 3 , 4, 5]
	})
	it('should delete at index [0]', function() {
		var a = setup(testArray)
		should(setup(testArray)).be.equal([2, 3, 4, 5])
	})

	it('should delete at last', function() {
		var a = setup(testArray)
		should(setup(testArray).be.equal([1, 2, 3, 4])
	})
})
