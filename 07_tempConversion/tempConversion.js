const convertToCelsius = function(value1) {
  const  celsius = (value1-32) * 5/9 ;
  const rounded = Math.round(celsius * 10 )/10;
  return ` ${value1} convert To celsius is : ${rounded}`;
};
console.log(convertToCelsius(-100));

const convertToFahrenheit = function(value2) {
  const fahrenheit = value2 * (1.8) + 32
  const rounded = Math.round(fahrenheit * 10 )/10;
  return ` ${value2} convert To celsius is : ${rounded}`;
};
console.log(convertToFahrenheit(-10));
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
