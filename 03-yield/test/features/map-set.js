import {
  es5,
  es6
} from '../../src/features/map-set'

export default function() {
  it('should emulate Map/Set behavior in ES5', () => {
    var klasses = es5()
    var mySet = new klasses.MySet()
    mySet
      .add(1)
      .add(2)
      .add(3)

    mySet.has(1).should.eql(true)
    mySet.has(2).should.eql(true)
    mySet.has(3).should.eql(true)
    mySet.has(4).should.eql(false)

    var myMap = new klasses.MyMap()
    myMap.set('Hello', 'World!')
    myMap.set('second', 2);
    (function() {
      myMap.set(1, 2)
    }).should.throw()
    myMap.get('Hello').should.eql('World!')
    myMap.get('second').should.eql(2)
  })

  it('should show Map/Set behavior in ES6', () => {
    var mapSet = es6()
    const mySet = mapSet.MySet
    mySet
      .add(1)
      .add(2)
      .add(3)

    mySet.has(1).should.eql(true)
    mySet.has(2).should.eql(true)
    mySet.has(3).should.eql(true)
    mySet.has(4).should.eql(false)
    
    var myMap = mapSet.MyMap
    myMap.set('Hello', 'World!')
    myMap.set('second', 2);
    /*(function() {
      myMap.set(1, 2)
    }).should.throw()*/
    myMap.get('Hello').should.eql('World!')
    myMap.get('second').should.eql(2)
  })
}
