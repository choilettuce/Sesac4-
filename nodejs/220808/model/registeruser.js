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
    var paramId = req.body.age

    cnn.query( 'SELECT * FROM register_user', (err, rows) => {
        if ( err ) throw err;
        console.log( rows);
        cb(rows);
    });
}