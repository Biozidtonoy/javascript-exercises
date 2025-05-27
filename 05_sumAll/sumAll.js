const sumAll = function(num1,num2) {
    let n = 0;
    sum = num1;
    if (!Number.isInteger(num1) || !Number.isInteger(num2)) return "ERROR";
    if (num1 < 0 || num2 < 0) return "ERROR";
    for( let i = num1; i<num2; i++){
        n =i +1;
        sum = sum + n ;
    }
    return sum;
};
console.log(sumAll("2", 4));


// Do not edit below this line
module.exports = sumAll;
