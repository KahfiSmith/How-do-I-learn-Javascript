{
  const regex1 = /kahfi/;
  const regex2 = new RegExp("kahfi");
  const regex3 = new RegExp(/al/);

  console.log(regex3);
}

{
  const name = "kahfi smith";
  const regex = /kahfi/;

  const result = regex.exec(name);
  console.log(result);
  console.log(regex.exec("tidak ada"));

  const test = regex.test(name);
  console.log(test);
  console.log(regex.test("tidak ada"));
}

{
  const name = "kahfi smith";
  const regex1 = /kahfi/gi;
  const regex2 = /smith/gi;

  let result;
  while ((result = regex1.exec(name)) !== null) {
    console.log(result);
  }

  while ((result = regex2.exec(name)) !== null) {
    console.log(result);
  }
}

{
  const regex = /ek[aiueo]/gi;
  const text = "eko ado eki eka ejo emi elo eke";
  let result;

  while ((result = regex.exec(text)) !== null) {
    console.log(result);
  }
}

{
  const string = 'eko ado eki eka ejo emi elo eke'

  console.log(string.match(/ek[aiueo]/ig))
  console.log(string.search(/ek[aiueo]/ig))
  console.log(string.replace(/ek[aiueo]/i, 'keren'))
  console.log(string.replaceAll(/ek[aiueo]/ig, 'keren'))
  console.log(string.split(/e/ig))
}
