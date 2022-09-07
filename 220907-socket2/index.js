var express = require("express");
var app = express();
var http = require("http").Server(app);
var io = require("socket.io")(http);

app.get("/", function(req,res){
    console.log("client");
    res.sendFile(__dirname + "/index.html");

});
io.on("connection", function(socket){
    console.log("connected");
    socket.emit("hello", "안녕");
    
    })
    socket.on("hello", function(data){
        socket.emit("Response", "안녕하세요");
    
    });

    socket.on("study", function(data){
        socket.emit("Response", "공부합시다");
    
    });

http.listen(8000, function(){
    console.log("Server port :", 8000);
});
