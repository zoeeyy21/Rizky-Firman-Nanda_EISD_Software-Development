function findMostMentionedNaughtyKid(names) {
    let countMap = {};
    
    names.forEach(name => {
        countMap[name] = (countMap[name] || 0) + 1;
    });

    let maxCount = Math.max(...Object.values(countMap));

    if (maxCount === 1) return "Semuanya anak baik";

    let mostMentioned = Object.keys(countMap).filter(name => countMap[name] === maxCount);
    
    return mostMentioned.join(" dan ") + " Nackal";
}

// Contoh input
console.log(findMostMentionedNaughtyKid(["Bagas", "Dimas", "Bagas", "Bagas", "Indra", "Gilang", "Gilang", "Hana", "Fajar", "Fajar"]));
console.log(findMostMentionedNaughtyKid(["Bagas", "Dimas", "Fajar", "Bagas", "Indra", "Gilang", "Gilang", "Bagas", "Fajar", "Fajar"]));
console.log(findMostMentionedNaughtyKid(["Aisyah", "Bagas", "Dewi", "Dimas", "Eka", "Fajar", "Gilang", "Hana", "Indra", "Jihan"]));
