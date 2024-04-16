// immutable
const names = ["Harry", "Ron", "Jeff", "Thomas"];
const newNamesWithExcMark = names.map((name) => `${name}!`);

console.log({
  names,
  newNamesWithExcMark,
});

// case 2
const user = {
  firstname: "Harry",
  lastName: "Protter", // ups, typo!
};

const renameLastNameUser = (newLastName, user) => {
  user.lastName = newLastName;
};

renameLastNameUser("Potter", user);

console.log(user);
