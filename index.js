const coffeeStock = require('./Module/export_import');
 
const makeCoffee = (type, miligrams) => {
  if (coffeeStock[type] >= miligrams) {
    console.log("Kopi berhasil dibuat!");
  } else {
    console.log("Biji kopi habis!");
  }
}
 
makeCoffee("robusta", 80);