import { coffeeStock, isCoffeeMachineReady } from "./Module/export_import.js";

const makeCoffee = (type, miligrams) => {
  if (coffeeStock[type] >= miligrams) {
    console.log("Kopi berhasil dibuat!");
  } else {
    console.log("Biji kopi habis!");
  }
};

const displayStock = (stock) => {
  for (const type in stock) {
    console.log(type);
  }
};

displayStock(coffeeStock);

makeCoffee("robusta", 80);
console.log(coffeeStock);
console.log(isCoffeeMachineReady);
