var a=0

function show() {
	console.log(a)
}

function add(callback){
	setTimeout(function(){
		a+=1
		callback()
	},1000)
}

add(show)