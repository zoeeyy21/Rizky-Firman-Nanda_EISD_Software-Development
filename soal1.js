function cekAngka(angka) {
    let minAngka = Math.min(...angka);
    let maxAngka = Math.max(...angka);
    let avgAngka = angka.reduce((a, b) => a + b, 0) / angka.length;
    return [minAngka, maxAngka, avgAngka];
}

console.log(cekAngka([4.5, 2.0, 1.5, 3.0, 2.5, 4.0, 5.0, 3.5, 2.0, 1.0]));