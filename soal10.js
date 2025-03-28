function calculateChange(payment, cost) {
    let change = payment - cost;
    let denominations = [100000, 50000, 20000, 10000, 5000, 2000, 1000, 500, 200, 100];
    let changeMap = {};

    for (let denom of denominations) {
        if (change >= denom) {
            changeMap[denom] = Math.floor(change / denom);
            change %= denom;
        }
    }
    
    return changeMap;
}

console.log(calculateChange(10000, 7500));   
console.log(calculateChange(5000, 1100));    
console.log(calculateChange(178000, 90500)); 
