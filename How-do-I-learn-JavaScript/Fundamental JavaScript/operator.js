let a = 10;
let b = 2;

console.log(a += b);
console.log(a -= b);
console.log(a *= b);
console.log(a /= b);
console.log(a %= b);

console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b);
console.log(a == b);
console.log(a != b);
console.log(a === b);
console.log(a !== b);

/* AND operator */
console.log(a < 15 && b > 10); // (true && true) -> true
console.log(a > 15 && b > 10); // (false && true) -> false

/* OR operator */
console.log(a < 15 || b > 10); // (true || true) -> true
console.log(a > 15 || b > 10); // (false || true) -> true

/* NOT operator */
console.log(!(a < 15)); // !(true) -> false
console.log(!(a > 15)); // !(false) -> true

/* NOT operator versi 2 (bisa digunakan untuk lebih dari 1 operator) */
console.log(!(a < 15 && b > 10)); // !(true && true) -> false
console.log(!(a > 15 || b > 10)); // !(false || true) -> true

