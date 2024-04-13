let myArray = ["Cokelat", "Rainbow", 22, true, "Programming"];
console.log(myArray);
console.log(myArray[1]);
console.log("Panjang nilai myArray adalah " + myArray.length );

myArray.push('JavaScript'); //menambahkan data diakhir
console.log(myArray);

myArray.pop(); //menghapus data di akhir
console.log(myArray);

myArray.shift(); //menghapus data di awal
myArray.unshift("Apple"); //menambahkan data di awal
console.log(myArray);

myArray.splice(0, 1);   // Menghapus dari index 2 sebanyak 1 elemen
console.log(myArray);

delete myArray[1];
console.log(myArray);

const month = ['January', 'March', 'April', 'May'];
console.log('before splice: ', month);

month.splice(1, 0, 'February');
console.log('after splice: ', month);