const displayMyScore = (name, score = 0) => {
  if (score > 80 && score < 100) {
    console.log(
      `My name is ${name}, i scored ${score} and managed to get very good grades`
    );
  } else if (score > 50 && score <= 80) {
    console.log(
      `My name is ${name}, i scored ${score} and i managed to get good grades`
    );
  } else {
    console.log(
      `My name is ${name}, i scored ${score} and i managed to get some good grades`
    );
  }
};

displayMyScore("Budi", 81);
