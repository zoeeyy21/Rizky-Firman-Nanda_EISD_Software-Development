function processRatings(ratings) {
    let min = Math.min(...ratings);
    let max = Math.max(...ratings);
    let avg = ratings.reduce((a, b) => a + b, 0) / ratings.length;
    return [min, max, avg];
}
console.log(processRatings([4.5, 2.0, 1.5, 3.0, 2.5, 4.0, 5.0, 3.5, 2.0, 1.0]));