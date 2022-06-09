const reverseString = function(string) {
    let split = string.split("");
    let idx = split.length - 1;
    let ans = "";
    while (idx >= 0){
        ans = `${ans}${split[idx]}`;
        idx--;
    }
    return ans;
};

// Do not edit below this line
module.exports = reverseString;
