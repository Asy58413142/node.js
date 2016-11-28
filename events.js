var events=require('events')
var event=new events.EventEmitter()
function say(data) {
	console.log(this)
	console.log(data)
}
event.on('a',say)
event.on('a',function(data){

	console.log(say)	
	console.log(data)
	console.log(this)
})


event.emit('a',"wo",'sada')