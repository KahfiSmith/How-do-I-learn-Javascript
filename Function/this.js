const sample = () => {
  console.log(this);

  const inner = () => {
    console.log(this);
  };

  inner();
};

sample();

// function
const person = {
    name: "kahfi",
    sayHello: function (value) {
        console.log(`hello ${value} my name is ${this.name}`)
        // this = person
    }
}

person.sayHello("ahmad")

// arrow function
const persona = {
    name: "kahfi",
    sayHello: (value) => {
        console.log(`hello ${value} my name is ${this.name}`) 
        // this = window bukan person
    }
}