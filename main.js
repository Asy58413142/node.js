//引入events模块
var events=require('events');
//创建eventEmitter对象
var eventEmitter = new events.EventEmitter();
//创建事件处理程序
var connectHandler=function connected() {
	console.log('连接成功');
	eventEmitter.emit('data');
}

eventEmitter.on('connection',connectHandler);

eventEmitter.on('data',function(){
	console.log('接受数据成功');
});

eventEmitter.emit('connection');

console.log('程序执行完毕');

var fs=require('fs');
fs.readFile('data.txt',function(err,data){
	if (err) {
		console.log(err.stack);
		return;
	}
	console.log(data.toString());
});
console.log('程序执行完毕');
var zlib=require('zlib');
fs.createReadStream('data.txt')
	.pipe(zlib.createGzip())
	.pipe(fs.createWriteStream('data.txt.zip'));

console.log("压缩完成");
setTimeout(function(){
	console.log('--------------------------');
},1000);
fs.createReadStream('data.txt.zip')
	.pipe(zlib.createGunzip())
	.pipe(fs.createWriteStream('newData.txt'));
console.log('解压完成');
