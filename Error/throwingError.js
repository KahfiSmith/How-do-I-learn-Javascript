// case 1
const json = '{"name": "John", "age": 30}';
try {
  const user = JSON.parse(json);

  console.log(user.name);
  console.log(user.age);
} catch (error) {
  console.log(error.name);
  console.log(error.message);
}

// case 2
const jason = "{ bad json }";
try {
  const user = JSON.parse(jason);

  console.log(user.name);
  console.log(user.age);
} catch (error) {
  console.log(error.name);
  console.log(error.message);
}

// case 3
const json1 = '{ "age": 20 }';
try {
  const user = JSON.parse(json1);

  console.log(user.name);
  console.log(user.age);
} catch (error) {
  console.log(error.name);
  console.log(error.message);
}

// case 4
const json2 = '{ "age": 20 }';
try {
  const user = JSON.parse(json2);

  if (!user.name) {
    throw new SyntaxError("'name' is required.");
  }

  console.log(user.name);
  console.log(user.age);
} catch (error) {
  console.log(`JSON Error: ${error.message}`);
}

// case 4
const json3 = '{ "name": "Yoda", "age": 20 }';
try {
  const user = JSON.parse(json3);

  if (!user.name) {
    throw new SyntaxError("'name' is required.");
  }

  errorCode;

  console.log(user.name);
  console.log(user.age);
} catch (error) {
  console.log(`JSON Error: ${error.message}`);
}

// case 5
try {
} catch (error) {
  if (error instanceof SyntaxError) {
    console.log(`Json error: ${error.message}`);
  } else if (error instanceof ReferenceError) {
    console.log(`Reference error: ${error.message}`);
  } else {
    console.log(error.stack);
  }
}
