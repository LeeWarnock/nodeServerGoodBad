var http = require('http');

var PORT = 8080;

function handleRequest(request, response){
	response.end('holyshit it works' + request.url);
}
var server = http.createServer(handleRequest);

server.listen(PORT, function(){
	console.log('Server is listening on: http://localhost:%s, PORT');
});