function init() {
  const name = "Obi Wan"; // Variabel lokal di dalam scope fungsi init

  function greet() {
    // Inner function, merupakan contoh closure
    console.log(`Halo, ${name}`); // Memanggil variabel yang dideklarasikan di parent function
  }

  greet();
}

init();

// case 2
const add = () => {
    let counter = 0;
      return () => {
        return ++counter;
    };
  }
  
  const addCounter = add();
  
  console.log(addCounter());
  console.log(addCounter());
  console.log(addCounter());