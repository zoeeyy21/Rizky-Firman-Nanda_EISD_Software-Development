function cariAnakNakal(names) {
    let hitungAnak = {};
    
    names.forEach(name => {
        hitungAnak[name] = (hitungAnak[name] || 0) + 1;
    });

    let maxCount = Math.max(...Object.values(hitungAnak));

    if (maxCount === 1) return "Semuanya anak baik";

    let mostMentioned = Object.keys(hitungAnak).filter(name => hitungAnak[name] === maxCount);
    
    return mostMentioned.join(" dan ") + " Nackal";
}

// Contoh input
console.log(cariAnakNakal(["Bagas", "Dimas", "Bagas", "Bagas", "Indra", "Gilang", "Gilang", "Hana", "Fajar", "Fajar"]));
console.log(cariAnakNakal(["Bagas", "Dimas", "Fajar", "Bagas", "Indra", "Gilang", "Gilang", "Bagas", "Fajar", "Fajar"]));
console.log(cariAnakNakal(["Aisyah", "Bagas", "Dewi", "Dimas", "Eka", "Fajar", "Gilang", "Hana", "Indra", "Jihan"]));
