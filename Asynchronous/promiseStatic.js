// promise all
// mengeksekusi semua promise
const promise1 = new Promise((resolve) => setTimeout(() => resolve(1), 1000));
const promise2 = new Promise((resolve, reject) =>
  setTimeout(() => reject(new Error("ups")), 2000)
);
const promise3 = new Promise((resolve) => setTimeout(() => resolve(3), 3000));

Promise.all([promise1, promise2, promise3])
  .then((values) => console.log(values))
  .catch((error) => console.log(error.message));

// promise race
// mengeksekusi promise paling cepat tidak peduli resolve atau reject
const promise4 = new Promise((resolve, reject) =>
  setTimeout(() => reject(new Error("ups")), 1000)
);
const promise5 = new Promise((resolve) => setTimeout(() => resolve(2), 2000));
const promise6 = new Promise((resolve) => setTimeout(() => resolve(3), 3000));

Promise.race([promise4, promise5, promise6])
  .then((value) => console.log(value))
  .catch((error) => console.log(error.message));

// promise all settled
// mengeksekusi semua promise dalam bentuk array of object
const promise7 = new Promise((resolve) => setTimeout(() => resolve(1), 1000));
const promise8 = new Promise((resolve, reject) => setTimeout(() => reject(new Error("Error")), 2000));
const promise9 = new Promise((resolve) => setTimeout(() => resolve(3), 3000));

Promise.allSettled([promise7, promise8, promise9])
 .then((results) => console.log(results));

// promise any
// mengeksekusi promise paling cepat namun yang berstatus fullfilled 

// fulfilled sample
const promiseResolve1 = new Promise((resolve, reject) => setTimeout(() => resolve("1"), 1000));
const promiseResolve2 = new Promise((resolve, reject) => setTimeout(() => resolve("2"), 2000));
const promiseResolve3 = new Promise((resolve, reject) => setTimeout(() => resolve("3"), 3000));

Promise.any([promiseResolve1, promiseResolve2, promiseResolve3])
 .then((value) => console.log(value)) 
 .catch((error) => console.log(error.message));

// rejected sample
const promiseReject1 = new Promise((resolve, reject) => setTimeout(() => reject(new Error('1')), 1000));
const promiseReject2 = new Promise((resolve, reject) => setTimeout(() => reject(new Error('2')), 2000));
const promiseReject3 = new Promise((resolve, reject) => setTimeout(() => reject(new Error("3")), 3000));

Promise.any([promiseReject1, promiseReject2, promiseReject3])
 .then((value) => console.log(value))
 .catch((error) => console.log(error.message)); 
