const names = ["Harry", "Ron", "Jeff", "Thomas"];
const newNamesWithExcMark = [];

for (let i = 0; i < names.length; i++) {
  newNamesWithExcMark.push(`${names[i]}!`);
}
console.log(newNamesWithExcMark);

// cara simple
const namess = ["Harry", "Ron", "Jeff", "Thomas"];
const newNamesWithExcMarks = names.map((name) => `${name}!`);

console.log(newNamesWithExcMark);
