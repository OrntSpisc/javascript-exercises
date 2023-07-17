const removeFromArray = function(array, ...remove) {
    remove.forEach(element => {
        if (array.indexOf(element) != -1) {
            array.splice(array.indexOf(element), 1);
        }
    });
    return array;
};

console.log(removeFromArray([1, 2, 3], 4));

// Do not edit below this line
module.exports = removeFromArray;
