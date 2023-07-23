const palindromes = function (string = "") {
    cleanString = string.replace(/[^\w]|_/g, "");
    cleanLowerString = cleanString.toLowerCase();
    let reverse = "";
    for (let index = cleanString.length - 1; index >= 0; index--) {
        reverse += cleanLowerString[index];
    }
    return cleanLowerString == reverse;
};

// Do not edit below this line
module.exports = palindromes;
