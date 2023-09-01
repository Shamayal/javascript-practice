// Clothing Size
let shirtWidth = 18;
let shirtLength = 29;
let shirtSleeve = 8.47;

if (
  shirtWidth >= 18 &&
  shirtWidth < 20 &&
  shirtLength >= 28 &&
  shirtLength < 29 &&
  shirtSleeve >= 8.13 &&
  shirtSleeve < 8.38
) {
  console.log("S");
} else if (
  shirtWidth >= 20 &&
  shirtWidth < 22 &&
  shirtLength >= 29 &&
  shirtLength < 30 &&
  shirtSleeve >= 8.38 &&
  shirtSleeve < 8.63
) {
  console.log("M");
} else if (shirtWidth === 22 && shirtLength === 30 && shirtSleeve === 8.63) {
  console.log("L");
} else {
  console.log("N/A");
}

// Checking your Balance
let balance = 325.3456;
let checkBalance = true;
let isActive = false;

if (checkBalance === true) {
  if (isActive && balance > 0) {
    console.log("Your balance is $" + balance.toFixed(2) + ".");
  } else if (isActive && balance === 0) {
    console.log("Your account is empty.");
  } else if (isActive && balance < 0) {
    console.log("Your balance is negative. Please contact bank.");
  } else {
    console.log("Your account is no longer active.");
  }
} else {
  console.log("Thank you. Have a nice day!");
}

// Murder Mystery
/*
poison belongs to the ballroom
book belongs to the library
pool stick belongs to the billiards room
knife belongs to the dining room

Ms. Mora was in the ballroom
Mrs. Ali was in the library
Mr. Chen was in the billiards room
Dr. Johnson was in the dining room
*/
let weapon = "";
let solved = false;

let room = "ballroom";
let suspect = "Ms. Mora";

if (room === "ballroom" && suspect === "Ms. Mora") {
  weapon = "poison";
  solved = true;
} else if (room === "library" && suspect === "Mrs. Ali") {
  weapon = "book";
  solved = true;
} else if (room === "billiards room" && suspect === "Mr. Chen") {
  weapon = "pool stick";
  solved = true;
} else if (room === "dining room" && suspect === "Dr. Johnson") {
  weapon = "knife";
  solved = true;
} else {
  solved = false;
}

// The code below will run only when `solved` is true
if (solved) {
  console.log(suspect + " did it in the " + room + " with the " + weapon + "!");
}