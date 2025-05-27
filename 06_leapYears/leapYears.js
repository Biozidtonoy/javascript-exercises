const leapYears = function(year) {
    if(year % 4 == 0 && year % 100 !=0 ) {
        return `${year} is leap year`;
    }else if(year % 4 ==0 && year % 400 ==0 ) {
        return `${year} is leap year`;
    }else if(year % 4 !=0 || year % 100 ==0 && year %400 !=0){
        return `${year} is not leap year`;
    }
};
console.log(leapYears(1800));

// Do not edit below this line
module.exports = leapYears;
