let eatPlants = true;
let eatAnimals = false;

// true, true, omnivore
// true, false, herbivore
// false, true, carnivore
// false, flase, undefined/other

let category = eatPlants ? (eatAnimals ? "omnivore" : "herbivore") : (eatAnimals ? "carnivore" : "undefined");
console.log(category)

// 2 ternary operators withing 1 larger ternary operator
// nested within a ternary operator