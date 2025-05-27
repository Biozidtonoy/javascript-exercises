const removeFromArray = function(arr, ...value) {
    const ar = arr.toString();
    console.log(ar);
    
    return arr.filter(element => !value.includes(element));
};
console.log(removeFromArray(["hey", 2, 3, "ho"], "hey", 3));

// Do not edit below this line
module.exports = removeFromArray;
