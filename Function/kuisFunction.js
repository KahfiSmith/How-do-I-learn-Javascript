/**
 * TODO:
 * 1. Buatlah fungsi bernama minimal dengan ketentuan berikut:
 *    - Menerima dua buah argumen number, a dan b.
 *    - Mengembalikan nilai terkecil antara a atau b.
 *    - Bila nilai keduanya sama, maka kembalikan dengan nilai a
 *
 *    contoh:
 *    minimal(1, 4) // output: 1
 *    minimal(3, 2) // output: 2
 *    minimal(3, 3) // output: 3
 *
 * 2. Buatlah sebuah function bernama findIndex yang menerima dua parameter, yaitu array dan number.
 *    Fungsi tersebut harus mengembalikan index dari angka yang sesuai pada array tersebut.
 *    Jika angka tidak ditemukan, maka kembalikan nilai -1.
 *
 *    contoh:
 *    findIndex([1, 2, 3, 4, 5], 3) // output: 2
 *    findIndex([1, 2, 3, 4, 5], 6) // output: -1
 *    findIndex([1, 2, 3, 4, 5], 5) // output: 4
 */

// soal 1
const minimal = (a, b) => {
    if (a <= b) {
        return a
    } else {
        return b
    }
}

let result;
result = minimal(1, 4)
console.log(result);

result = minimal(3, 2)
console.log(result);

result = minimal(3, 3)
console.log(result);

// soal 2
const findIndex = (arr, num) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            return i;
        }
    }
    return -1
}

result = findIndex([1, 2, 3, 4, 5], 3)
console.log(result)

result = findIndex([1, 2, 3, 4, 5], 6)
console.log(result)

result = findIndex([1, 2, 3, 4, 5], 5)
console.log(result)