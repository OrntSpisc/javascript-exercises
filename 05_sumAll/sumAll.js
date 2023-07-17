const sumAll = function(number1, number2) {
    if(number1 < 0 || number2 < 0) {
        return "ERROR";
    }
    if (number1 !== parseInt(number1) || number2 !== parseInt(number2))  {
        return "ERROR";
    }

    let sum = 0;
    let from;
    let to;
    if (number1 > number2) {
        from = number2;
        to = number1;
    } else if (number2 > number1) {
        from = number1;
        to = number2;
    } else {
        from = number1;
        to = number2;
    }
    for (let i = from; i <= to; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
