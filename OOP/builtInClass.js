// date
const date = new Date();

const timeInJakarta = date.toLocaleString('id-ID', {
    timezone: 'Asia/Jakarta',
});



const timeInTokyo = date.toLocaleString('ja-JP', {
    timezone: 'Asia/Tokyo',
});

const timeInMakasar = date.toLocaleString('id-ID', {
    timezone: 'Asia/Makassar',
});

console.log(timeInJakarta);
console.log(timeInTokyo);
console.log(timeInMakasar);

// array
const myArray = new Array('a', 'b', 'c', 'd', 'e', 'f');
console.log(myArray);

class UniqueArray extends Array {
    constructor(...args) {
      // make sure args is unique before passing it to super
      const uniqueValue = args.filter((item, index) => args.indexOf(item) === index);
   
      super(...uniqueValue);
    }
   
    push(item) {
      // make sure only unique item is added
      if (!this.includes(item)) {
        super.push(item);
      }
    }
  }
   
  const someArray = new UniqueArray('a', 'b', 'c', 'a', 'b', 'c');
  console.log(someArray); // ['a', 'b', 'c']
  someArray.push('d');
  console.log(someArray); // ['a', 'b', 'c', 'd']
  someArray.push('a');
  console.log(someArray); // ['a', 'b', 'c', 'd']