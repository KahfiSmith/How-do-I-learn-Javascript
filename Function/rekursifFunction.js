const rekursif = (value) => {
    if (value === 1)  {
        return 1;
    } else {
        return value * rekursif(value - 1);
    }
}

console.log(rekursif(5))

