const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
 
const [firstFood, secondFood, thirdFood, fourthFood] = favorites;
// const [ , , thirdFood ] = favorites;
 
console.log(firstFood);
console.log(secondFood);
console.log(thirdFood);
console.log(fourthFood);

let myFood = "Ice Cream";
let herFood = "Noodles";
 
[myFood, herFood] = favorites;
 
console.log(myFood);
console.log(herFood);


// sebelum ES6
var a = 1;
var b = 2;
var temp;
 
console.log("Sebelum swap");
console.log("Nilai a: " + a);
console.log("Nilai b: " + b);
 
temp = a;
a = b;
b = temp;
 
console.log("Setelah swap");
console.log("Nilai a: " + a);
console.log("Nilai b: " + b);

// setelah ES6
let x = 1;
let y = 2;
 
console.log("Sebelum swap");
console.log("Nilai x: " + x);
console.log("Nilai y: " + y);
 
[x, y] = [y, x] // menetapkan nilai a dengan nilai b dan nilai b dengan nilai a.

console.log("Setelah swap");
console.log("Nilai a: " + a);
console.log("Nilai b: " + b);