class Student {
  constructor(name) {
    this.name = name;
    this.finished = false;
  }
}

let john = new Student("John");

console.log("Nimi:", john.name);
console.log("Lõpetatud:", john.finished);
