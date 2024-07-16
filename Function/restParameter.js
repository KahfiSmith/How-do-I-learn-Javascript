const sum = (name, ...data) => {
  let total = 0;
  //data menjadi array
  for (const item of data) {
    total += item;
  }
  console.log(`total ${name} is ${total}`);
};

sum("orange", 10, 20, 30);
sum("watermelon", 10, 20, 100);
sum("banana", 10, 20, 10);

// rest parameter
const values = [10, 20, 30];
console.log(sum("test", ...values));

// argument parameter
const oldSum = (...args) => {
    let total = 0;
    for (const argument of args) {
      total += argument;
    }
    console.log(`total is ${total}`);
  };
  
  oldSum(1, 2, 3, 4, 5);  
  
  
