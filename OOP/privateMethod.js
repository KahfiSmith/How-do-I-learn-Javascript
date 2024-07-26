class Person {
  say(name) {
    if (name) {
      this.#sayWithName(name);
    } else {
      this.#sayWithoutName();
    }
  }

  #sayWithoutName() {
    console.log("hello");
  }
  #sayWithName() {
    console.log(`hello ${name}`);
  }
}

const kahfi = new Person();
kahfi.say("yahawoo");
