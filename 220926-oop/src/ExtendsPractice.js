function ExtendsPractice() {
    return (
      <div className="App">
      </div>
    
    );
  }

class Student {
    constructor(name, university, age, number) {
        this.name = name;
        this.university = university;
        this.age =age;
        this.number = number;
    }
    getinfo() {
        return {name : this.name, university : this.university, age : this.age, number : this.number}
    } 
}

export default ExtendsPractice;

  let Student1 = new Student('Kim', 'seoul', 20, 20221534);
  console.log(Student1);
  let Student2 = new Student('Lee', 'korea', 23, 20203584);
  console.log(Student2);

class Kim extends Student {
    constructor(name, university, age, number, major,) {
        super(name, university, age, number)
        this.major = major; 
    }
  }

