const express = require("express")
const app = express();
const port = 8080;
const bodyParser = require("body-parser");
const fs = require('fs').promises;

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));
app.use( bodyParser.json());

app.get("/", function(req,res){
    res.render("회원가입");
});

// ! get
// app.get("/receive", function(req,res){
//     console.log(req.body);
//     console.log(req.query); //url 물음표 뒤에 오는 정보들
//     res.render("receive",req.query);
// });

app.post("/receive", function(req,res){
    console.log(req.body);
    
    var id = req.body.id;
    var name = req.body.name;
    var pw = req.body.pw; 
     
    async function exec(){
        await fs.mkdir('./signup');
        await fs.writeFile('./signup/info.txt', `${id}//${name}//${pw}`,);
    }

    res.render("receive", req.body);
    exec();
});


app.listen(port, ()=>{
    console.log("Server Port : ", port) ;

})