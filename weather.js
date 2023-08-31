let weather = 'thunder';

if (weather === 'snow') {
  console.log('Bring a coat!');
} else if (weather === 'rain') {
  console.log('Bring a rain jacket!');
} else if (weather === 'thunder') {
  console.log('stay inside!');
} else {
  console.log('Wear what you have one!')
}

// ternary operator
let message = rain ? 'Bring an umbrella' : 'No need for an umbrella!'; // ternary operator
console.log(message)


// declare a variable named sunny and assign it true
let sunny = true;
// use the logical NOT (!) operator to assign the opposite value of sunny to isCloudy
let isCloudy = !sunny; // ! (true) this is evaluated to false

console.log("Is it cloudy?", isCloudy);