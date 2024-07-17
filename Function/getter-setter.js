const person = {
  firstname: "kahfi",
  lastname: "smith",
  get fullname() {
    return `${this.firstname} ${this.lastname}`;
  },
  set fullname(value) {
    const array = value.split(" ");
    this.firstname = array[0];
    this.lastname = array[1];
  },
};

person.fullname = "dimas prasetya";
console.table(person);
