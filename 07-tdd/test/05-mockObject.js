var should = require('should')
var scalar = require('../src/05-mockObject.js')

describe('magdas mockObject (contains function Login that contains other functions (authoriser and login) and a login-counter)', function(){
    
	it('should return that 0 users have logged in', function(){
		var no_user = {}
		var login = new Login(no_user);
        expect(login.loginCount()).to.equal(0);
	})

	it('should return that 1 user has logged in', function(){
		var no_user = {authorise: function() { return true; } }
		var login = new Login(no_user);
        expect(login.loginCount()).to.equal(1);
	})
})