class Student {
  constructor(name, id) {
    let _name = name;
    let _id = id;
    let _status = "Active";

    this.getId = function () {
      return _id;
    };

    this.setName = function (newName) {
      _name = newName;
    };

    this.getName = function () {
      return _name;
    };

    this.setStatus = function (newStatus) {
      if (["Active", "Expelled", "Finished", "Inactive"].includes(newStatus)) {
        _status = newStatus;
      }
    };

    this.getStatus = function () {
      return _status;
    };
  }
}

let student1 = new Student("John Doe", 123);

console.log("ID:", student1.getId());
console.log("Nimi:", student1.getName());
console.log("Staatus:", student1.getStatus());

student1.setName("Jane Smith");
student1.setStatus("Inactive");

console.log("Uus nimi:", student1.getName());
console.log("Uus staatus:", student1.getStatus());