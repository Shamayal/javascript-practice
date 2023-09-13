// Accessing Properties

let spaceship = {
  homePlanet: 'Earth', 
  colour: 'silver',
  'Fuel Type': 'Turbo Fuel',
  numCrew: 5,
  flightPath: ['Venus', 'Mars', 'Saturn']
};

console.log(spaceship.homePlanet); // 'Earth'
console.log(spaceship.colour); // 'silver'
console.log(spaceship.year); // undefined
let planetArray = spaceship.flightPath;
console.log(planetArray); // [ 'Venus', 'Mars', 'Saturn' ]
let crewCount = spaceship.numCrew;
console.log(crewCount); // 5

console.log(spaceship["Fuel Type"]); // 'Turbo Fuel'
console.log(spaceship["numCrew"]); // 5
console.log(spaceship['year']); // undefined
let propName = 'numCrew';
console.log(spaceship[propName]); // 5

// Property Assignment
spaceship.colour = 'metallic gold';
spaceship.type = 'Apollo 11';
delete spaceship.homePlanet;
console.log(spaceship); // new changes

// Methods
spaceship.launch = function launch () {
  return 'Spaceship is launching!';
}

console.log(spaceship.launch()); // calls on the function
console.log(spaceship); 

spaceship.launch = function launch () {
  if (spaceship.numCrew > 0 && spaceship.flightPath.length > 0) {
    spaceship.isLaunched = true;
    return 'Spaceship is launching!'
  } else {
    spaceship.isLaunched = false;
    return 'Cannot launch. Check crew and file path'
  }
}

console.log(spaceship.launch()); // calls on the function
console.log(spaceship); // updated launch function and new key called isLaunched added