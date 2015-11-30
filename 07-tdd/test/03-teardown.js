var should = require('should')
var scalar = require('../src/03-teardown.js')

describe('magdas teardown', function(){
    afterEach(function() {
    	var arr = []
  	})

	it('should insert 2 string elements to array', function(){
		a = teardown(arr);
		should(a[0]).be.a.String()
		should(a[1]).be.a.String()
		should(a).have.length(2)
	})

	it('should insert 2 integer elements to array', function(){
		a = teardown(arr)
		should(a[0]).be.a.Number()
		should(a[1]).be.a.Number()
		should(a).have.length(2)
	})
})