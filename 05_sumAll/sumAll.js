const sumAll = function(a, b) {
    if (a < 0 || b < 0 || 
        typeof a != 'number' || typeof b != 'number') return 'ERROR'; 
    let small = a > b ? b : a;
    const big = small === a ? b : a;

    let ans = 0;
    while (small <= big) {
        ans += small;
        small++;
    }
    return ans;
};

// Do not edit below this line
module.exports = sumAll;
