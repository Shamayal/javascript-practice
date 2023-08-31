let age = 18;
let ticketPrice;

if (age > 0 && age < 4) {
  console.log('Infants and toddlers are free!');
} else if (age >= 4 && age <= 12) {
  ticketPrice = '$10';
  console.log(`The ticket price for children is ${ticketPrice}.`);
} else if ((age > 12 && age <= 18) || (age >= 65 && age <= 100)) {
  ticketPrice = '$15';
  console.log(`The ticket price for students and seniors is ${ticketPrice}.`);
} else if (age > 18 && age < 65) {
  ticketPrice = '$20';
  console.log(`The ticket price for adults is ${ticketPrice}.`);
} else {
  console.log('Please enter a valid age!');
}

