export function es5(cb) {
  setTimeout(function() {
    cb(null, 10)
  }, 1)
}

export function es6() {
	const promise = new Promise((resolve, reject) => {
		const val = 10
		resolve(val)
	})

	return promise
}