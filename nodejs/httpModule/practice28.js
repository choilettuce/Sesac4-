const http = require('http');
const fs = require('fs').promises

const server = http.createServer( async function(req, res) {
    try{ 
        const data = await fs.readFile('./hihi.html');
        res.writeHead(200);
        res.end(data);
    }
    catch(err) {
        console.error(err);
        res.writeHead(404);
        res.end(err.message);
    }
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