const http = require('http');
const fs = require('fs');

const server = http.createServer( function(req, res) {
 fs.readFile('./hihi.html', function(err, data) {
    
    if(err) {
        console.error(err);
        res.writeHead(404);
        res.end(err.message);
    }else {
        res.writeHead(200);
        res.end(data);
    }
} );
})

server.listen(7000, function(){
    console.log("7000번 포트");
})

server.on("request", function() {
    console.log("Clienet Requset");
})

server.on("connection", function(){
    console.log("Clienet connection");
})

server.on("CheckContinue", function(){
    console.log("Clienet CheckContinue");
})