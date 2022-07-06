let nums = [1, 1];

const fibonacci = function(x) {
    if (typeof x === 'string'){
        const num = Number(x);
        if (!(Number.isInteger(num) && num > 0)) {
            return "OOPS";
        }
        x = num;
    }
    if (x < 1) return "OOPS";
    fillNums(x);
    return nums[x-1];
};

const fillNums = (x) => {
    while (nums.length < x) {
        let sum = nums[nums.length-1] + nums[nums.length-2];
        nums.push(sum);
    }
}

// Do not edit below this line
module.exports = fibonacci;
