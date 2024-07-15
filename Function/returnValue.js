const sayHello = (firstname, lastname) => {
  const say = `hello ${firstname} ${lastname}`;
  return say;
};

const result = sayHello("john", "doe");
console.log(result);


const getValue = (value) => {
  if (value > 90) {
    return 'A'
  } else if (value > 70) {
    return 'B'
  } else if (value > 50) {
    return 'C'
  } else if (value > 30) {
    return 'D'
  } else {
    return 'E'
  }
}