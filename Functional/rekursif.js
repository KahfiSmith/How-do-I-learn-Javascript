// for
const countDown = start => {
    do {
        console.log(start);
        start -= 1;
    }
    while (start > 0);
}

countDown(10);

// rekursif
const CountDown = start => {
    console.log(start);
    if(start > 0) CountDown(start-1);
  };
  
  CountDown(10);