const { set } = require("firebase/database");

//case 1
class Car {
  constructor(brand, color, maxSpeed) {
    this.brand = brand;
    this.color = color;
    this.maxSpeed = maxSpeed;
    this.chassisNumber = `${brand}-${Math.floor(Math.random() * 1000) + 1}`;
  }
}

class Mail {
  constructor(sender, receiver, subject, body) {
    this.sender = sender;
    this.reciever = receiver;
    this.subject = subject;
    this.body = body;
  }
}
const car1 = new Car("Toyota", "Silver", 200);
const car2 = new Car("Honda", "Black", 180);
const car3 = new Car("Suzuki", "Red", 220);

const mail1 = new Mail(
  "John Doe",
  "Jane Doe",
  "Hello!",
  "This is a test email"
);
const mail2 = new Mail(
  "Jane Doe",
  "John Doe",
  "Hello!",
  "Hello i'm from china"
);

const mail3 = new Mail(
  "Marc",
  "Wooin",
  "Good Morning",
  "Good Morning everyone"
);

console.log(car1);
console.log(car2);
console.log(car3);
console.log(mail1);
console.log(mail2);
console.log(mail3);

// case 2
class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(fullName) {
    const [firstName, lastName] = fullName.split(" ");
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const user = new User("John", "Doe");
console.log(user);
console.log(user.fullName);

user.fullName = "Fulan Fulanah";
console.log(user);
console.log(user.fullName);

// case 3
class Mobil {
  constructor(brand, color, maxSpeed) {
    this.brand;
    this.color;
    this.maxSpeed;
    this._chassisNumber = `${brand}-${Math.floor(Math.random() * 1000)}`;
  }

  get chassisNumber() {
    return this._chassisNumber;
  }

  set chassisNumber(chassisNumber) {
    console.log("you are not allowed to change the chassisNumber");
  }
}

const mobil = new Mobil('Bmw', 'Black', 200);
console.log(mobil.chassisNumber);
mobil.chassisNumber = 'Bmw-123';
console.log(mobil.chassisNumber);
