const registeruser = require("../model/registerUser");

exports.get_register = (req,res) => {
    registeruser.get_register(function( result ){
        console.log( "result : ", result );

        res.render("register", { data: result });
    });
}