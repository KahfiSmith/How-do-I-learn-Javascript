const numberSet = new Set([1, 4, 6, 4, 1]);
numberSet.add(7);
numberSet.add(8);
numberSet.add(9);
numberSet.add(10);

numberSet.delete(10);

console.log(numberSet);
