{
  // create date
  const date1 = new Date();
  console.log(date1);

  const date2 = new Date(2020, 10, 10);
  console.log(date2);

  const date3 = new Date(2020, 10, 10, 1, 0, 0, 0);
  console.log(date3);
}

{
  // epoch and unix timestamp
  const date1 = new Date();
  console.log(date1.getTime());

  const date2 = new Date(2020, 10, 10);
  console.log(date2.getTime());

  const date3 = new Date(2020, 10, 10, 1, 0, 0, 0);
  console.log(date3.getTime());

  console.log(Date.now());
}

{
  // date parsing
  const time = Date.parse("2020-10-10T08:10:10.123+07:00");
  console.log(time);

  const date = new Date(time);
  console.log(date);
}

{
  // setter and getter date
  const date = new Date();

  console.log(date.getFullYear());
  console.log(date.getMonth());
  console.log(date.getDate());
  console.log(date.getHours());
  console.log(date.getMinutes());
  console.log(date.getSeconds());
  console.log(date.getMilliseconds());
  console.log(date.getTimezoneOffset());
}
