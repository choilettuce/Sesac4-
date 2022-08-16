const http = require("http");

const server = http.createServer( function(req,res) {
    res.writeHead(200, {'content-Type': 'Text/html; charset=utf8'} );
    res.write("<h1>hi</h1>");
    res.end("<p>안녕</p>");
});

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