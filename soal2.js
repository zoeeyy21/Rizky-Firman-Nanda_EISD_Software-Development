function isPalindrome(text) {
    let cleanText = text.replace(/[^a-zA-Z]/g, '').toLowerCase();
    let reversed = cleanText.split('').reverse().join('');
    return cleanText === reversed ? "eureeka!" : "suka blyat";
}

console.log(isPalindrome("Angsa")); 
console.log(isPalindrome("KataK")); 
console.log(isPalindrome("kasur empuk")); 
console.log(isPalindrome("Aku Suka Kamu")); 
console.log(isPalindrome("Ibu Ratna antar ubi.")); 
