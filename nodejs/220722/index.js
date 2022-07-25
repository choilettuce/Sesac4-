const express = require('express');
const app = express();
const port = 8000;


app.set('view engine', 'ejs');
app.use( '/abc', express.static('public')); // '/abc'가상경로 설정

app.get('/', (req,res) => {
    res.render("0722-1", {a: 'aaa', b:'bbb'}); // render 이용시에는 확장자 안적어도됨
    var list = []; // 예를 들어 DB에서 정보를 가져옴
});

app.listen(port, () => {
    console.log('server port : ', port);
});

