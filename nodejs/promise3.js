function promise(flag) { 
    return new Promise( function(resolve, reject){
        if(flag) {
            resolve( "then으로 연결");
        } else { 
            reject("catch로 연결");

        }
    });
}

promise1(true)
    .then(function(result){
        console.log("then : ", result);
    }) 
    .catch                                          