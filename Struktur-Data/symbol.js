{
  // symbol
  const firstname = Symbol("firstname");
  const lastname = Symbol("lastname");

  const person = {};
  person[firstname] = "al";
  person[lastname] = "kahfi";

  console.log(person);
}

// symbol for
{
  const person = {};
  person[Symbol.for("firstname")] = "al";
  person[Symbol.for("lastname")] = "kahfi";

  console.log(person);
  console.log(person[Symbol.for("firstname")]);
  console.log(person[Symbol.for("lastname")]);
}
