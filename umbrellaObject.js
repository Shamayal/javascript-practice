// let umbrella = {
//   colour: 'orange',
//   isOpen: false
// };

let umbrella = {
  colour: 'orange', // property
  isOpen: false, // property
  open: function () { // method, this function opens the umbrella if it is closed!
    if (umbrella.isOpen === true) {
      return "The umbrella is already open.";
    } else {
      umbrella.isOpen = true;
      return "I opened the umbrella.";
    }
  },
  close() { // new way of writing function in an object, this function closes the umbrella if it is open!
    if (umbrella.isOpen === false) {
      return "The umbrella is already closed.";
    } else {
      umbrella.isOpen = false;
      return "I closed the umbrella.";
    }
  }
};

console.log(umbrella.open()); // I opened the umbrella, and isOpen is now true
console.log(umbrella);

for (let key in umbrella) {
  console.log(`${key}: ${umbrella[key]}`);
}