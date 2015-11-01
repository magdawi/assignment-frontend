export function es5(val) {
  var Symbol = function(val) {
    this.key = val
  }

  return new Symbol(val)
}

export function es6(val) {
	return new Symbol(val)
}
