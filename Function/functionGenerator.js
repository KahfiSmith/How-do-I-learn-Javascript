function* ganjil(value) {
  for (let i = 1; i <= value; i++) {
    if (i % 2 === 1) {
      yield i;
    }
  }
}

const angkaganjil = ganjil(100);
for (const angka of angkaganjil) {
  console.log(angka);
}
