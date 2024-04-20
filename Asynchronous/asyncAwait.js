const withDrawMoney = (amount) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (amount > 100) {
        reject(new Error("not enough money to withdraw"));
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
      resolve("ticket - 1");
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

const watchMovie = async (amount) => {
  try {
    const money = await withDrawMoney(amount);
    const ticket = await buyCinemaTicket(money);
    const result = await goInsideCinema(ticket);

    return result;
  } catch (error) {
    throw error;
  }
};

watchMovie(10)
  .then((result) => console.log(result))
  .catch((error) => console.log(error.message));

watchMovie(5)
  .then((result) => console.log(result))
  .catch((error) => console.log(error.message));
