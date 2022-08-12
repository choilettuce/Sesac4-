const mysql = require("mysql");
const router = require("../../220805-2/routes");
const cnn = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: '1234', // Sesac1234*
    database: 'Sesac'
});

exports.get_register = (cb) => {
    var paramId = req.body.id
    var paramPW = req.body.pw
    var paramName = req.body.Name
    var paramage = req.body.age

    cnn.query(`INSERT INTO register_user VALUE('${paramId}','${paramPW}','${paramName}',${paramage})`, 
    (err, rows) => {
        if ( err ) throw err;
        console.log( rows);
        cb(rows);
    });
}