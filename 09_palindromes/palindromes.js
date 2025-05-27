const palindromes = function (text) {
    let texts = text.toLowerCase().replace(/[^a-z0-9]/g, '');
    let newText = texts.split("").reverse().join("");
    console.log(newText);
    
    return texts === newText ;
};
console.log(palindromes("A car, a man, a maraca."));


// Do not edit below this line
module.exports = palindromes;
