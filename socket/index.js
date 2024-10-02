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
    socket.emit("hello", "server hello");
    socket.on("click", function(data){
        console.log("client click");
        socket.emit("clickResponse", 'success');
        io.emit("clickResponse", "io success")
    })
});
// 소켓을 통해서 보내면 클라이언트한테만(방개념)
// io로 보내면 전체에게
http.listen(8000, function(){
    console.log("Server port :", 8000);
});

//on : 연결받기
//connect : 이벤트이름