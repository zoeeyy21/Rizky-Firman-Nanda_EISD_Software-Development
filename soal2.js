function cekPalindrom(text) {
    let Teks = text.replace(/[^a-zA-Z]/g, '').toLowerCase(); 
    let Kebalikan = Teks.split('').reverse().join('');
    return Teks === Kebalikan ? "eureeka!" : "suka blyat";
}

console.log(cekPalindrom("Angsa"));
console.log(cekPalindrom("KataK"));
console.log(cekPalindrom("kasur empuk"));
console.log(cekPalindrom("Aku Suka Kamu"));
console.log(cekPalindrom("Ibu Ratna antar ubi.")); 
