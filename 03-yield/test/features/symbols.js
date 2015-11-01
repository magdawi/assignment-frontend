import {
  es5,
  es6
} from '../../src/features/symbols'

export default function() {
  it('should show that symbols do not exist in ES5', () => {
  	es5("hi").should.throw()
  	
  })

  it('should show symbols syntax and behavior in ES6', () => {
  	  	let sym = es6("hi");
  	  	(typeof sym === "symbol").should.eql(true)
  })
}
