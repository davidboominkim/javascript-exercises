const removeFromArray = function(array, ...elems) {
    return array.filter( (elem) => !elems.includes(elem));
};

// Do not edit below this line
module.exports = removeFromArray;
