var should = require('should')
var teardown = require('../src/08-teardown.js')

describe('adams teardown', function() {
	var testArray = [1, 2, 3, 4, 5]

	afterEach(function() {
		testArray = []
	})
	it('should delete at index [0]', function() {
		var a = setup(testArray)
		should(testArray).be.equal([2, 3, 4, 5])
	})

	it('should delete at last', function() {
		var a = setup(testArray)
		should(testArray).be.equal([1, 2, 3, 4])
	})
})
