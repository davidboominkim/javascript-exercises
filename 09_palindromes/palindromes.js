const palindromes = function (string) {
    const low = string.toLowerCase();
    let p1 = 0;
    let p2 = low.length - 1;
    // console.log(low);
    while (p1 < p2) {
        let p1Code = low.charCodeAt(p1);
        let p2Code = low.charCodeAt(p2);
        // console.log(p2Code);
        if (p1Code > 122 || p1Code < 97) {
            p1++;
            continue;
        }
        if (p2Code > 122 || p2Code < 97) {
            p2--;
            continue;
        }
        if (p2Code !== p1Code) return false;
        p2--;
        p1++;
    }

    return true;
};

// Do not edit below this line
module.exports = palindromes;
