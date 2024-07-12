let namaKosong = [];
let nama = ["kahfi", "smith"];

// menambahkan data diakhir
const names = []
names.push('Mohamad') 
names.push('Al')
names.push('Kahfi')

console.table(names)
console.log(names[0])

names[0] = "Alexander"
console.table(names)

delete names[1]
console.table(names)
