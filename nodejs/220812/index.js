const express = require('express');
const app = express();
const cookieParser = require("cookie-parser");
const session = require('express-session');


app.set("view engine","ejs");
app.use(cookieParser('1234'));

const cookieConfig = {
    maxAge: 30000,
    path: '/', //쿠키에 접근하는 경로
    httpOnly: true, //기본값은 false, true-> 웹서버로만 쿠키값확인 가능
    signed : true // 쿠키를 암호화
};

app.use(session({
    secret: 'secret key'
    //resave: false, // 세션을 덮어쓸지? false->변경되지 않게함\
    //saveUniinitialized: true
}));

app.get("/login", (req,res) => {
    res.render("login");
})

app.post("/login", (req,res)=> {
    var flag = true;
    if (flag) {
        req.session.id = req.body.id;
        res.redirect("/profile");
    } else res.redirect("/login");
});

app.get("/profile", (req,res)=> {
    if(req.session.id == undefined || req.session.id == ""){
        res.redirect("login");
        return false;
    }
    res.render("profile");
})

app.get("/", (req,res) => {
    req.session.name = "홍길동";
    res.cookie('key','value', cookieConfig);
    res.cookie('key2','value2', cookieConfig);
    res.render("index");
});

app.get("/cookie", (req,res)=> {
    res.render("cookie");
});

app.get("/get", (req,res)=> {
    console.log(req.session.name);
    console.log(req.cookies);
    res.send( req.cookies); 
});

app.get("/destroy", (req,res)=> {
    req.session.destroy(function(err){
        res.send('삭제');
    })
    req.session.name="";
})

app.listen(8000, ()=>{
    console.log( "Server : ", 8000 );
});
