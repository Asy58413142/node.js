var http=require('http');
var url=require('url');
function start(route) {
	function onRequest(request,response){
		var pathname=url.parse(request.url).pathname;

		route(pathname);
		response.writeHead(200,{"Content-Type": "text/plain"});
		response.write('hahhhsdhashdahsd');
		response.end();
	}

	http.createServer(onRequest).listen(1008);
}
exports.start=start;