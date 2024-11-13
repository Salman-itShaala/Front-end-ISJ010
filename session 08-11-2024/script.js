// operators

// 1. assignment operator ( = )

let age = 24;

// 2. Arithmatic operators

let num1 = 10;

let num2 = 3;

console.log(num1 + num2); // 13

console.log(num1 - num2); // 7

console.log(num1 * num2); // 30

console.log(num1 / num2); // 3.3333

console.log(num1 % num2); // 1

console.log(4 ** 2); // 4 square -> 16
console.log(4 ** 3); // 4 cube -> 64

// comparison operators

// greater than

let num3 = 12;

let num4 = 15;

let num5 = 12;

// greter than
console.log(num3 > num4); // 12 > 15 - false

// less than
console.log(num3 < num4); // 12 < 15 - true

// greater than or equal to

console.log(num3 >= num4); // 12 >= 15 - false

console.log(num3 >= num5); // 12 >= 12 - true

console.log(num4 >= num5); // 15 >= 12 - true

// less than or equal to

console.log(num3 <= num4); // 12 <= 15 - true

console.log(num3 <= num5); // 12 <= 12 - true

console.log(num4 <= num5); // 15 <= 12 - false

// Equality operators

console.log("pune" == "nashik"); // false

console.log("pune" == "pune"); // true

console.log("pune" == "Pune"); // false

console.log("one" == 1); // false

// double equal to operator
console.log(1 == "1"); // true

// triple equal to operator
console.log(1 === "1"); // false

console.log(10 == 10); // true

console.log(11 == 10); // false

console.log(10 != 11); // true

console.log(10 != 10); // false

//  Logical operators

// logical AND

console.log(true && true); // true

console.log(true && false); // false

console.log(false && true); // false

console.log(false && false); // false

let email = "abc@gmail.com";

let password = "salman@123";

console.log(email === "abc@gmail.com" && password === "salman@123");

// logical OR

console.log(false || false); // false

console.log(true || false); // true

console.log(false || true); // true

console.log(true || true); // true

console.log(!true); //false
console.log(!false); // true

// increment and decrement operators

let num = 10;

console.log(num--); // 10

// ternary operator

// ""
// ''
//  ``

if (+"one") {
  console.log("not a falsy value");
} else {
  console.log("is falsy value");
}

let userAge = 10;

if (userAge > 18) {
  console.log("You are over 18, can vote");
} else if (userAge === 18) {
  console.log("Congrats you can start voting from this year");
} else {
  console.log("You can not vote");
}

const day = 1;

switch (day) {
  case 1:
    console.log("Sunday");
    break;
  case 2:
    console.log("Monday");
    break;
  default:
    console.log("Invalid input");
}
