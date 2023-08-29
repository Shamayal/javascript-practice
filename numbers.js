// The Number.isInteger() method returns true if the argument is an integer.
console.log(Number.isInteger(10)); // outputs: true
console.log(Number.isInteger(10.5)); // outputs: false 10.5 is a floating point number

// The toFixed() method rounds a number to a specified number of decimal digits.
// For working with money, use toFixed(2).
console.log(9.1234.toFixed(0)); // outputs: 9
console.log(9.123.toFixed(1)); // outputs: 9.1
console.log(9.123.toFixed(3)); // outputs: 9.123
console.log(9.123.toFixed(5)); // outputs: 9.12300

console.log(1.89403.toFixed(3));

// The Number() function can be used to convert JavxaScript variables to numbers.
console.log(Number("10")); // outputs: 10
console.log(Number("  10")); // outputs: 10
console.log(Number("10.33")); // outputs: 10.33
console.log(Number("10 33")); // outputs: NaN
console.log(Number("Hello")); // outputs: NaN



