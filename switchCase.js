let groceryItem = 'potatoes';
let price;

// if (groceryItem === 'tomatoes') {
//   price = 2.49;
// } else if (groceryItem === 'potatoes') {
//   price = 1.79;
// } else if (groceryItem === 'milk') {
//   price = 5.89;
// } else if (groceryItem === 'bread') {
//   price = 1.99;
// } else {
//   price = 'invalid item';
// }

// console.log(`The price of ${groceryItem}: ${price}.`);



switch (groceryItem) {
  case 'tomatoes':
    price = 2.49;
    break;
  case 'potatoes':
    price = 1.79;
    break;
  case 'milk':
    price = 5.89;
    break;
  case 'bread':
    price = 1.99;
    break;
  default:
    price = 'invalid item';
}

console.log(`The price of ${groceryItem}: ${price}.`);