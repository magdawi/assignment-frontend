var should = require('should')
var scalar = require('../src/04-fixture.js')

describe('magdas fixture', function(){
    
	it('should return an object with a username and a birthdaydate - username: Adam, birthdaydate: 1990-01-17', function(){
		var o = fixture();
		should(o).be.an.Object
		should(o).have.ownProperty('username').exactly('Adam')
		should(o).have.ownProperty('birthdaydate').exactly('1990-01-17')
	})
})