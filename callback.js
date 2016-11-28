function learn(argument) {
	console.log(argument)
}

function we(callback,argument){
	argument+=" is a callback"
	callback(argument)
}

we(learn,"This")