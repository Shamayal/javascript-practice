// question 1
let a = 32 + "500";
console.log(a.length);

// question 2
let x = 25;
let y = 4;
let z = x % y;
console.log(`${x} divided by ${y} has a remainder of ${z}`);

// question 3
console.log(typeof(+Infinity));

// question 4
let num = 7.24;
num --;
console.log(Math.round(num));
console.log(Math.ceil(num));
console.log(Math.floor(num));

// question 5
let dataType = typeof Hello;
console.log(dataType);
console.log(typeof dataType);

// question 6
let sideLength = "10.01";
let area = sideLength * sideLength;
let perimeter = 4 * sideLength;
console.log(`For a square with side length ${sideLength}, the area is ${Math.round(area)} cm^2 and the perimeter is ${perimeter} cm.`);