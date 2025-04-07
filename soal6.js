function hitungTotal(orders) {
    const menu = {
        "Ayam Goreng Krispi": { type: "Makanan", price: 15000 },
        "Ayam Puk Puk": { type: "Makanan", price: 13000 },
        "Ayam Bakar": { type: "Makanan", price: 20000 },
        "Es Teh": { type: "Minuman", price: 5000 },
        "Es Jeruk": { type: "Minuman", price: 7000 }
    };

    let totalHarga = 0;
    for (let item in orders) {
        let price = menu[item].price;
        let tax = menu[item].type === "Makanan" ? price * 0.05 : price * 0.03;
        totalHarga += (price + tax) * orders[item];
    }

    return totalHarga * 1.15; 
}

let rehan = { "Ayam Bakar": 2, "Es Teh": 1 }; 
let amba = { "Ayam Puk Puk": 1, "Es Teh": 3 };
let faiz = { "Ayam Goreng Krispi": 1, "Ayam Puk Puk": 1, "Ayam Bakar": 1, "Es Teh": 1, "Es Jeruk": 1 };

console.log("Rehan harus membayar:", hitungTotal(rehan));
console.log("Amba harus membayar:", hitungTotal(amba));
console.log("Faiz harus membayar:", hitungTotal(faiz));
