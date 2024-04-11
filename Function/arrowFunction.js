// function declaration
// function sayHello(greet) {
//   console.log(`${greet}!`);
// }

// function expression
// const sayName = function (name) {
// console.log(`Nama saya ${name}`)
// }

//   arrow function
// const sayName = (name) => {
//   console.log(`Nama saya ${name}`);
// };

// dan apabila hanya fungsi hanya punya 1 parameter maka
const sayName = (name) => {
  console.log(`Nama saya ${name}`);
};
sayName("Leia");

// penulisan arrow function tanpa parameter, tetap ditulis kan kurung buka nya
const sayHello = () => {
    console.log("ohayou gozaimazu");
}
sayHello();

const sayWhat = () => console.log("bjir lah gan gosong");
sayWhat();