const express = require("express")
const app = express();
const port = 8000;
const bodyParser = require("body-parser");
const fs = require('fs').promises;

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));
app.use( bodyParser.json()); // json 형태로 받아옴.. 딕셔너리 형태..

app.get("/", function(req,res){
    res.render("실습33");
});

app.get('/prac_receive', function(req, res){
    console.log(req.query)  // axios의 파람을 받아옴
    let name = req.query.name;
    let msg = name + '님 회원가입 성공';
    // let gender = req.query.gender;
    // let year = req.query.year;
    // let month = req.query.month;
    // let day = req.query.day;
    // let inter = req.query.inter;

    res.send(msg); // ejs 파일의 axios로 전달
})

app.post('/prac_receive', function(req,res){
    let name = req.body.name;
    let msg = name + '님 회원가입 성공';

    res.send(msg); // ejs 파일의 axios로 전달
    
});


app.listen(port, ()=>{
    console.log("Server Port : ", port) ;

})