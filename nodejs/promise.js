const func1 = new Promise ( (resolvem, reject ) => {
    var flag = true;
    if(flag) resolve ("성공");
    else reject("실패");

});

func1.then( value => {
    return valuue + "1";
}).then( value => {
    console.log(result);
}).catch (err => {
    console.log(err);
})