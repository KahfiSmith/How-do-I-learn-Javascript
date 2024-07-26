const me = {
  nama: "Kahfi Smith",
  umur: 17,
  hobi: "Mendengarkan musik dan menonton anime",
  "is Genius": true,
};

console.log(`hi, nama saya ${me.nama}`);
console.log(`umur saya ${me.umur} tahun`);
console.log(`hobi saya adalah ${me.hobi}`);
console.log(`saya adalah seorang ${me["is Genius"]}`);

const spaceship = {
  name: "Millenium Falcon",
  manufacturer: "Corellian Engineering Corporation",
  maxSpeed: 1200,
  color: "Light gray",
};

spaceship.color = "Glossy red";
spaceship.maxSpeed = 1300;
console.log(spaceship);

{
  const target = {
    firstname: "kahfi",
  };
  const source = {
    lastname: "smith",
  };

  Object.assign(target, source);
  console.log(target);
  console.log(source);
}

{
  const person = {
    firstname: "kahfi",
    lastname: "smith",
  };

  // tidak bisa diubah dan dihapus
  Object.freeze(person);
  // tidak bisa dihapus
  Object.seal(person);

  person.firstname = "miselia";
  delete person.lastname;
  console.log(person);
}