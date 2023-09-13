/* Which of the following is NOT a primitive datatype in JavaScript?
A) Character

What is the result of 3 + “5”?
C) “35”

Which of the following statements best describes the purpose of
the
"if-else
"
statement in JavaScript?
B) It allows you to execute different blocks of code based on a
condition.

What is the output? */
const sunny = true;
const isCloudy = !sunny;
console.log("Is it cloudy?", isCloudy); // Is it cloudy? false

// What is the output?
const budget = 100;
const itemPrice = 85;

const canAfford = itemPrice <= budget ? 'Yes' : 'No';
console.log("Can I afford this item? " + canAfford); // Can I afford this item? Yes

/*
A ‘for’ loop consists of three parts, what are they?
Initialization, stopping condition, and iteration statement

What is the output? */
const array1 = [1, 2];
const array2 = ['A', 'B'];

for (let i = 0; i < array1.length; i++) {
  for (let j = 0; j < array2.length; j++) {
    console.log(array1[i], array2[j])
  }
}
/*
1 A
1 B
2 A
2 B
*/

/* What is the difference between a function parameter and an
argument?
Parameters are used inside a function and arguments are used when calling

What is the output? */
const multiplyByNineFifths = function(number) {
  return number * (9/5);
};

const getFarenheit = function(celsius) {
  return multiplyByNineFifths(celsius) + 32;
};

console.log(getFarenheit(15)); // output: 59

const fruits = ["apple", "banana", "orange", "strawberry", "grape"];
console.log(fruits[0]); // output: apple
fruits.push("mango");
console.log(fruits); // output: [ 'apple', 'banana', 'orange', 'strawberry', 'grape', 'mango' ]
fruits.pop();
console.log(fruits); // output: [ 'apple', 'banana', 'orange', 'strawberry', 'grape' ]
fruits[1] = "kiwi";
console.log(fruits); // output: [ 'apple', 'kiwi', 'orange', 'strawberry', 'grape' ]
console.log(fruits.length); // output: 5

/* What is the index of the last element in an array with four elements?
3

What is the output? */

const cakeIngredients = ['flour', 'baking powder', 'sugar', 'butter', 'eggs', 'vanilla', 'milk'];
const pieIngredients = ['apples', 'sugar', 'flour', 'cinnamon', 'butter', 'eggs'];
const sameIngredients = [];

for (let i = 0; i < cakeIngredients.length; i++) {
  for (let j = 0; j < pieIngredients.length; j++) {
    if (cakeIngredients[i] === pieIngredients[j]) {
      sameIngredients.push(cakeIngredients[i]);
    }
  }
};

console.log(sameIngredients); // output: [ 'flour', 'sugar', 'butter', 'eggs' ]