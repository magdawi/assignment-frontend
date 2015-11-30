module.exports= function(n){
	if(typeof n === "number"){
		return n
	}
	if(typeof n === "string"){
		return n
	}
	if(typeof n === "boolean"){
		return n
	}
	throw new Error('does only accept scalar input')
}