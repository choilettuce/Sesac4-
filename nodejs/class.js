class Cat { 
    constructor(name) {
        this.name = name;
    }

    mew() {
        console.log(this.name + "야옹");
    }

}

var cat1 = new Cat("나비");
var cat1 = new Cat("냥이");
console.log(cat1);
cat1.mew();
cat2.mew();


class Car {
    constructor() {
        this.isWheel = ture;
        this.isDoor = Door;
    }
    go(){
        console.log("전진");
    }
    back() {
        console.log("후진");
    }
    returnColor () {
        return this.returnColor()
    }
}

var car1 = new Car("red");
var car2 = new Car("red");
var car3 = new Car("red");
var car4 = new Car("red");
var car5 = new Car("red");

module.exports = {Car};