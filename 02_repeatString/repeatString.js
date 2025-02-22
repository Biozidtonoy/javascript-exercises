const repeatString = function(str,num) {
    let strs = "" ;
    for(let i = 0 ; i < num ; i++){
        strs+=str;
    }
    return strs;
};
console.log(repeatString("hey",3));


// Do not edit below this line
module.exports = repeatString;
