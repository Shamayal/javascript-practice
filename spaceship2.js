// Nested Object
let spaceship = {
  flightPath: ["Venus", "Mars", "Saturn"],
  crew: {
    captain: {
      name: "Alien",
      degree: "Computer Engineering",
      encourageTeam() {
        console.log("We got this!");
      },
      favouriteFoods: ["brownies", "peanut butter", "spinach"],
    },
  },
  nanoelectronics: {
    computer: {
      terabytes: 100,
      monitors: "HD",
    },
    "back-up": {
      battery: "Lithium",
      terabytes: 50,
    },
  },
};

console.log(spaceship.flightPath[1]); // 'Mars'
console.log(spaceship.nanoelectronics["back-up"].battery); // 'Lithium'
console.log(spaceship.crew.captain.favouriteFoods[3]); //undefined
let captainDegree = spaceship.crew.captain.degree;
console.log(captainDegree); // 'Computer Engineering'
spaceship.crew.captain.encourageTeam(); // 'We got this!'

// Looping Through Objects
let spaceship1 = {
  crew: {
    captain: { 
      name: 'Alien', 
      degree: 'Computer Engineering', 
      cheerTeam() { console.log('You got this!') } 
    },
    'chief officer': { 
      name: 'E.T.', 
      degree: 'Aerospace Engineering', 
      agree() { console.log('I agree, captain!') } 
    },
    medic: { 
      name: 'Yoda', 
      degree: 'Physics', 
      announce() { console.log(`Jets on!`) } },
    translator: {
      name: 'Groot', 
      degree: 'Conservation Science', 
      powerFuel() { console.log('The tank is full!') } 
    }
  }
}; 

// for...in
for (let crewMember in spaceship1.crew) {
  console.log(`${crewMember}: ${spaceship1.crew[crewMember].name}`);
}

/* Output:
captain: Alien
chief officer: E.T.
medic: Yoda
translator: Groot
*/