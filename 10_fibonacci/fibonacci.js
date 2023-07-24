const fibonacci = function(number) {
    const n = parseInt(number);
    if (n === NaN || n < 0) {
        return "OOPS";
    }

    let prevNum = 0;
    let curNum = 1;
    let helper = curNum;
    for (let i = 1; i < n; i++) {
        helper = curNum;
        curNum += prevNum;
        prevNum = helper;
        console.log(curNum);
    }
    console.log(curNum);
    return curNum;
};
fibonacci(4);
// Do not edit below this line
module.exports = fibonacci;
