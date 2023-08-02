const pricePerItem = 3500;
const orderedQuantity = 4;

let totalPrice;

totalPrice = pricePerItem * orderedQuantity;

console.log("price ", pricePerItem, " Quantity ", orderedQuantity, " total ", totalPrice);

const age = prompt("Скільки вам років?");
const ageOld = age >= 18;

console.log("Ви повнолітній?", ageOld);

alert("Ви повнолітній? "+ageOld);

const SAVED_PASSWORD = "qwerty";
const NEW_PASSWORD = prompt("Новий пароль");

const isMatch = SAVED_PASSWORD === NEW_PASSWORD;

console.log("Новий пароль співпадає зі старим? " + isMatch);
alert("Новий пароль співпадає зі старим? " + isMatch);

let a = 5;
let b = 10;
let c = 15;
let d = 20;

console.log(a += 2);
console.log(b -= 4);
console.log(c *= 3);
console.log(d /= 10);