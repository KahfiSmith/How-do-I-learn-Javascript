// impure function
let PI = 3.14;
const hitungLuasLingkaran = (jariJari) => {
  return PI * (jariJari * jariJari);
};

console.log(hitungLuasLingkaran(4));
PI = 5;
console.log(hitungLuasLingkaran(4));

// pure function
const HitungLuasLingkaran = (jariJari) => {
  return 3.24 * (jariJari * jariJari);
};

console.log(HitungLuasLingkaran(4));
console.log(HitungLuasLingkaran(8));

// impure function
const createPersonWithAge = (age, person) => {
  person.age = age;
  return person;
};

const person = {
  name: "Bobo",
};

const newPerson = createPersonWithAge(18, person);

console.log({
  person,
  newPerson,
});

// pure function
const CreatePersonWithAge = (age, person) => {
  return {
    ...person,
    age,
  };
};

const Person = {
  name: "Najib",
};

const NewPerson = CreatePersonWithAge(18, Person);
console.log({
  Person,
  NewPerson,
});

