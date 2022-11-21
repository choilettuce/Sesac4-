//const Visitor = require("../model/Visitor");
const models = require("../model");
// models => model/index.js 에서의 db

exports.get_visitors = (req,res) => {
    models.Visitor.findAll()// sequelize문법 -> select * FROM visitor;
    //model/Visitor.js에서의 model
    .then((result) => {
        // console.log( result[0] );
        // console.log(result[0].id);
        res.render("index", {data: result});
    });

//     Visitor.get_visitors(function( result ){
//         // console.log( "result : ", result );
//         // console.log( "index" );
//         // res.render("index", { data: result });
//     });
}

exports.post_comment = (req,res) => {
    // console.log( req.body );

    // Visitor.insert( req.body.name, req.body.comment, function( result ){
    //     res.send({ id: result });
    // } );
    let object = {
        name: req.body.name,
        comment: req.body.comment

    };
    models.Visitor.create( object )
    .then((result) => {
        console.log(result);
    })
}

exports.get_visitor = (req,res) => {
    // select * from visitor where id = req.query.id limit 1
    models.Visitor.findOne({
        where: { id: req.query.id, name: "홍길동"}
    }). then((result) => {
        console.log(result);
        res.send({ result : result});
    })
    // Visitor.get_visitor( req.query.id, function(result) {
    //     console.log( "result : ", result );
    //     res.send( { result : result[0] } );
    // })
}

exports.patch_comment = (req,res) => {
    // Visitor.update( req.body, function(result){
    //     console.log( result );
    //     res.send( "수정 성공" );
    // });
    let newObj ={
        name : req.body.name,
        comment : req.body.comment
    };
    models.Visitor.update(newObj, {where: {id : req.body.id, name: '홍길동'} } )
    .then((result) => {
        console.log(result);
        res.send('수정성공');
    })
}

exports.delete_comment = (req,res) => {
    // Visitor.delete( req.body.id, function(result){
    //     console.log( result );
    //     res.send( "삭제 성공" );
    // });
    models.Visitor.destroy({
        where: {id: req.body.id}
    }).then((result)=> {
        console.log(result);
        res.send('삭제성공');
    })
}