const outer = () => {
  const inner = () => {
    console.log("inner");
  };
  inner();
  inner();
};

outer();
// innner(); error
