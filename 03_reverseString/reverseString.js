const reverseString = function(text) {
    let newString = "";
    for(let i = text.length-1 ; i >=0 ;i--){
        newString += text[i];
    }
    return newString;
    // const newString = text.split("").reverse().join("");
    // return newString;
};
console.log(reverseString("123! abc! Hello, Odinite."));



// Do not edit below this line
module.exports = reverseString;

