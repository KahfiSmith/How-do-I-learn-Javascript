// array map
const newArray = ["Harry", "Ron", "Jeff", "Thomas"].map((name) => {
  return `${name}!`;
});
console.log(newArray);

// array filter #1
const truthyArray = [1, "", "Hallo", 0, null, "Harry", 14].filter((item) =>
  Boolean(item)
);
console.log(truthyArray);

// array filter #2
const students = [
  {
    name: "Harry",
    score: 60,
  },
  {
    name: "James",
    score: 88,
  },
  {
    name: "Ron",
    score: 90,
  },
  {
    name: "Bethy",
    score: 75,
  },
];

const eligibleForScholarshipStudents = students.filter(
  (student) => student.score > 85
);
console.log(eligibleForScholarshipStudents);

// array reduce
const Students = [
  {
    name: "Harry",
    score: 60,
  },
  {
    name: "James",
    score: 88,
  },
  {
    name: "Ron",
    score: 90,
  },
  {
    name: "Bethy",
    score: 75,
  },
];

const totalScore = students.reduce((acc, Student) => acc + Student.score, 0);
console.log(totalScore);

// array some
const array = [1, 2, 3, 4, 5];
const even = array.some((element) => element % 2 === 0);
console.log(even);

// array find
const murid = [
  {
    name: "Harry",
    score: 60,
  },
  {
    name: "James",
    score: 88,
  },
  {
    name: "Ron",
    score: 90,
  },
  {
    name: "Bethy",
    score: 75,
  },
];

const findJames = murid.find((student) => student.name === "James");
console.log(findJames);

// array short
const months = ["March", "Jan", "Feb", "Dec"];
months.sort();
console.log(months);

const array1 = [1, 30, 4, 1000, 101, 121];
array1.sort();
console.log(array1);

const array2 = [1, 30, 4, 1000];

const compareNumber = (a, b) => {
  return a - b;
};
const sorting = array2.sort(compareNumber);
console.log(sorting);

// array every
const scores = [70, 85, 90];
const minimumScore = 65;

const examPassed = scores.every((score) => score >= minimumScore);
console.log(examPassed);

// array foreach
const nama = ["Harry", "Ron", "Jeff", "Thomas"];

for (let i = 0; i < nama.length; i++) {
  console.log(`Hello, ${nama[i]}!`);
}

// case 2
const names = ["Harry", "Ron", "Jeff", "Thomas"];

for (let i = 0; i < names.length; i++) {
  if (names[i] === "Jeff") continue; // Bisa!

  console.log(`Hello, ${names[i]}!`);
}

// names.forEach((name) => {
//   if(name === 'Jeff') continue; // Tidak Bisa!
//   console.log(`Hello, ${name}`);
// });
