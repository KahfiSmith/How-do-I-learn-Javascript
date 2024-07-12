const me = {
  nama: "Kahfi Smith",
  umur: 17,
  hobi: "Mendengarkan musik dan menonton anime",
  "is Genius": true,
};

console.log(`hi, nama saya ${me.nama}`)
console.log(`umur saya ${me.umur} tahun`);
console.log(`hobi saya adalah ${me.hobi}`);
console.log(`saya adalah seorang ${me["is Genius"]}`);

const spaceship = {
  name: "Millenium Falcon",
  manufacturer: "Corellian Engineering Corporation",
  maxSpeed: 1200,
  color: "Light gray"
};

spaceship.color = "Glossy red";
spaceship.maxSpeed = 1300;
console.log(spaceship);