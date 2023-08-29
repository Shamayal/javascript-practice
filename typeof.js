// typeof way to check data type of variable
// returns or prints a string of the data type for example 
// "undefined", "boolean"

const firstVar = 'hi';
const secondVar = 100;
const thirdVar = 'blue'
const fourthVar = true;

console.log(typeof(firstVar + secondVar)); // output: string
console.log(typeof secondVar); // output: number
console.log(typeof fifthVar); // output: undefined
console.log(typeof(thirdVar + fourthVar)); // output: string
console.log(typeof(fourthVar));  // output: boolean

let outputType = typeof(fourthVar);
console.log(typeof outputType); // output: string

console.log(typeof Hello); // output: undefined
console.log(typeof "Hello"); // output: string