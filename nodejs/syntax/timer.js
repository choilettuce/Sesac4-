const func1 = setTimeout(() => {
    console.log("1.5초 후 실행")
}, 1500);

const func2 = setInterval(() => {
    console.log("1초 마다 반복")
}, 1000);

const func3 = setTimeout(() => {
    console.log("func3 실행")
}, 3000);

setTimeout (() => {
    clearTimeout(func3);
    clearInterval(func2);

}, 2500);

const func4 = setImmediate(() => {
    console.log( "fun4 즉시실행");
});

const func5 = setImmediate(() => {
    console.log( "fun5 즉시실행");
});

clearImmediate(fun5);


