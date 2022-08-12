const express = require('express');
const app = express();
const cookieParser = require("cookie-parser");

app.set("view engine","ejs");
app.use(cookieParser('1234'));

const cookieConfig = {
    maxAge: 30000,
    path: '/', //쿠키에 접근하는 경로
    httpOnly: true, //기본값은 false, true-> 웹서버로만 쿠키값확인 가능
    signed : true // 쿠키를 암호화
};

app.get("/", (req,res) => {
    res.cookie('key','value', cookieConfig);
    res.cookie('key2','value2', cookieConfig);
    res.render("index");
});

app.get("/cookie", (req,res)=> {
    res.render("cookie");
});

app.get("/get", (req,res)=> {
    console.log(req.cookies);
    res.send( req.cookies); 
});

app.listen(8080, ()=>{
    console.log( "Server : ", 8080 );
});
