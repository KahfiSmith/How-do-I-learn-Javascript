const person = {
  firstname: "kahfi",
  lastname: "smith",
  addres: {
    country: "indonesia",
    city: "nganjuk",
  },
};

const json = JSON.stringify(person);
console.log(json);

const jsonObject = JSON.parse(json);
console.log(jsonObject);
