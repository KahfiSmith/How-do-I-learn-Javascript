const profile = {
  firstName: "John",
  lastName: "Doe",
  age: 18,
};

const { firstName, lastName, age, isMale = true } = profile;

console.log(firstName, lastName, age, isMale);
