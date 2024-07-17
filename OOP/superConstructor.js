class Employe {
  constructor(firstname) {
    this.firstname = firstname;
  }
  sayHello(name) {
    console.log(`hello ${name}, my name is ${this.firstname}`);
  }
}

class Manager extends Employe {
  sayHello(name) {
    console.log(`hello ${name}, my name is manager ${this.firstname}`);
  }
  constructor(firstname, lastname) {
    super(firstname);
    this.lastname = lastname;
  }
}

const kahfi = new Employe("Kahfi");
kahfi.sayHello("Alexander");
const smith = new Manager("Smith", "Smith");
smith.sayHello("George");

console.log(kahfi);
console.log(smith);
