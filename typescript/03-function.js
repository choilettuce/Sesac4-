// function 함수이름 (변수명: 타입) : 반환타입 {}
function sum1(a, b) {
    return a + b;
}
;
console.log(sum1(1, 'a'));
console.log(sum1(1, null));
function sum2(a, b) {
    return a + b;
}
console.log(sum2(1, 2));
function sum3(a, b) {
    return a + b;
}
console.log(sum3(1));
var func1 = function () {
    console.log("func1");
};
var func2 = (a) => {
    console.log("func2");
};
let person = { name: '코딩온', age: 10 };
function getInfo(obj) {
}
function getInfo2(obj) {
}
let person2 = { name: '코딩온', age: 10 };
person2.age = person2.age + 1;
;
let loginUser = (id, pw) => {
    return true;
};
class MyBook {
    constructor() {
        this.title = '책';
        this.date = '2022-12-05';
    }
    getInfo() {
        console.log("정보");
    }
    changeTitle(newTitle) {
    }
}
;
