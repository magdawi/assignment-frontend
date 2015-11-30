var should = require('should')
var scalar = require('../src/02-setup.js')

describe('setup', function(){
	beforeEach(function() {
    	var arr = [1, 2, 3, 4]
  	})

	it('should delete second element of an array', function(){
		a = setup(arr);
		should(a[1]).be.equal(3).and.be.a.Number
		should(a).have.length(3)
	})

	it('should switch second and last element of an array', function(){
		a = setup(arr);
		should(a[1]).be.equal(arr[3]).and.be.a.Number
		should(a[3]).be.equal(arr[1]).and.be.a.Number
	})
})