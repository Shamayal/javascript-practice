// Exercise 2: Create an Object
const apple = {
  colour: "red", // typeof -> 'string'
  species: "Fuji",
  pest: { // typeof -> 'object
    name: "Wormy",
    favoriteFood: "apples"
  }
};

for (let key in apple) {
  console.log(`${key}: ${apple[key]}`);
};

/* Output:
colour: red
species: Fuji
pest: [object Object]
*/

const apple1 = {
  colour: "red", // typeof -> 'string'
  species: "Fuji"
};

/* Output:
colour: red
species: Fuji
*/

for (let key in apple1) {
  console.log(`${key}: ${apple[key]}`);
};
for (let key in apple) {
  if (typeof apple[key] === "object") { // typeof returns the data type as a string, example 'string', 'object', 'boolean'
    for (let nestedKey in apple[key]) { // nestedKey is name, favoriteFood
      console.log(`${nestedKey}: ${apple[key][nestedKey]}`); // this is for everything in the pest key
    }
  } else { // for the colour and species key
    console.log(`${key}: ${apple[key]}`);
  }
};

/* Output:
colour: red
species: Fuji
name: Wormy
favoriteFood: apples
*/