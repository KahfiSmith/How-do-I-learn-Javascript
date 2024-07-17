{
  const names = ["kahfi", "al", "kahfi", "al", "kahfi"];
  let [firstname, middlename, lastname, ...others] = names;

  console.log(firstname);
  console.log(middlename);
  console.log(lastname);
  console.log(others);
}

{
  const person = {
    firstname: "al",
    lastname: "kahfi",
    address: {
      strett: "jalan arjuna",
      city: "jakarta",
      country: "indonesia",
    },
    hobby: "game",
    channel: "4T330",
  };

  let { firstname, lastname, address, ...others } = person;
  console.log(firstname);
  console.log(lastname);
  console.log(address);
  console.log(others);
}
