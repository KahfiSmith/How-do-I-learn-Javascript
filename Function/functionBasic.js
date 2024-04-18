const seorangPersona = (nama, umur, pekerjaan) => {
  const persona = {
    nama: nama,
    umur: umur,
    pekerjaan: pekerjaan,
  };
  return persona;
};

const persona = seorangPersona("Harry", 20, "Programmer");
console.log(persona);
