class Person {
  constructor() {
    this.firstname = "";
    this.lastname = "";
    this.age = 0;
  }
}

class Student extends Person {
  constructor(firstname, lastname, age) {
    super();
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
  }
}

let person1 = new Person();
person1.firstname = "Alice";
person1.lastname = "Johnson";
person1.age = 25;

let person2 = new Person();
person2.firstname = "Bob";
person2.lastname = "Smith";
person2.age = 30;

let person3 = new Person();
person3.firstname = "Charlie";
person3.lastname = "Brown";
person3.age = 22;

let student1 = new Student("Eva", "Williams", 21);
let student2 = new Student("Frank", "Taylor", 28);
let student3 = new Student("Grace", "Miller", 23);

console.log("Person 1:", person1.firstname, person1.lastname, person1.age);
console.log("Person 2:", person2.firstname, person2.lastname, person2.age);
console.log("Person 3:", person3.firstname, person3.lastname, person3.age);

console.log("Student 1:", student1.firstname, student1.lastname, student1.age);
console.log("Student 2:", student2.firstname, student2.lastname, student2.age);
console.log("Student 3:", student3.firstname, student3.lastname, student3.age);
