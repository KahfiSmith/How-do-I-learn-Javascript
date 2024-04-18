const withDrawMoney = (amount) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (amount > 100) {
        reject(new Error("Not enough money to withdraw"));
      }
      resolve(amount);
    }, 1000);
  });
};

const buyCinemaTicket = (money) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (money < 10) {
        reject(new Error("Not enough money to buy ticket"));
      }
      resolve('ticket - 1');
    }, 1000);
  });
};

const goInsideCinema = (ticket) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!ticket) {
        reject(new Error("No ticket"));
      }
      resolve("enjoy the movie");
    }, 1000);
  });
};

function watchMovie() {
  withDrawMoney(100)
    .then((money) => buyCinemaTicket(money))
    .then((ticket) => goInsideCinema(ticket))
    .then((result) => console.log(result))
    .catch((error) => console.log(error.message));
}

watchMovie();
