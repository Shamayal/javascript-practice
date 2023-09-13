let umbrella = {
  colour: 'orange',
  isOpen: false
};

umbrella.colour = 'yellow'
console.log(umbrella.colour); // returns 'yellow'

let umbrella1 = {
  colour: 'orange', // property
  isOpen: false, // property
  open: function () { // method, this function opens the umbrella if it is closed!
    if (umbrella1.isOpen === true) {
      return "The umbrella is already open.";
    } else {
      umbrella1.isOpen = true;
      return "I opened the umbrella.";
    }
  },
  close() { // new way of writing function in an object, this function closes the umbrella if it is open!
    if (umbrella1.isOpen === false) {
      return "The umbrella is already closed.";
    } else {
      umbrella1.isOpen = false;
      return "I closed the umbrella.";
    }
  }
};

console.log(umbrella1.open()); // I opened the umbrella, and isOpen is now true
console.log(umbrella1);

for (let key in umbrella1) {
  console.log(`${key}: ${umbrella1[key]}`);
}