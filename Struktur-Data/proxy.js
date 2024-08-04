const target = {
  middlename: "el",
};

const handler = {
  get: function (target, property) {
    console.log(`acces property ${property}`);
    return target[property];
  },
  set: function (target, property, value) {
    console.log(`change property ${property} : ${value}`);
    target[property] = value;
    return true;
  },
};

const proxy = new Proxy(target, handler);
proxy.firstname = "kahfi";
proxy.lastname = "smith";

console.log(proxy.firstname);
console.log(proxy.middlename);
console.log(proxy.lastname);
console.log(target);
