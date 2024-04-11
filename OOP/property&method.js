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
const mail1 = new Mail(
  "John Doe",
  "Jane Doe",
  "Hello!",
  "This is a test email."
);

console.log(car1);
console.log(mail1);
