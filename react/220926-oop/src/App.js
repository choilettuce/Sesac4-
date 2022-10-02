function App() {
  return (
    <div className="App">
    </div>
  
  );
}

export default App;

class shape {
  constructor(w, h) {
    this.w =w;
    this.h =h;
  }
  getArea() {
    return this.w * this.h;
  }
}
class Square extends shape {
} 
class Triangle extends shape {
 constructor(x, y, name) {
 super(x,y);
 this.name = name;
  }
  getArea() {
    return this.w * this.h/2;
  }
} 

let shape1 = new shape(5,4);
console.log(shape1.getArea());

let shape2 = new shape(2,3);
console.log(shape2.getArea());

let shape3 = new Square(4,8);
console.log(shape3.getArea());

let shape4 = new Triangle(5,6);
console.log(shape4.getArea());

// 자바스크립트는 extends상속만 쓸 수 있다!!!

