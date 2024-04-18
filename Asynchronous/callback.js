const getUsers = (isOffline, callback) => {
  setTimeout(() => {
    const users = ["Johny", "Jack", "Abigail"];

    if (isOffline) {
      callback(new Error("cannot retrieve users due offline"), null);
      return;
    }

    callback(null, users);
  }, 2000);
};

const usersCallback = (error, users) => {
  if (error) {
    console.log("process failed:", error.message);
    return;
  }
  console.log('process success:', users);
};

getUsers( false, usersCallback);
getUsers(true, usersCallback);

// callback hell
function getUserWeather(userId) {
    try {
      const user = getUser(userId);
      const weather = getWeather(user.location);
      return { ...user, ...weather };
    } catch (error) {
      console.log(error.message);
      return null;
    }
  }
   
  const userWeather = getUserWeather(1);
  console.log(userWeather); 
