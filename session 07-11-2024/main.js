// data types in js

// 8 data types in js

// 1. number

let num1 = 10;
let num2 = 10.22;

console.log(typeof num2);

// 2. boolean

// true,  false

// 3. string

// ""

let name = "salman2";

// ''

let city = "pune";

let myIntro = "Im " + name + " and I live in " + city;

// `` -> backticks, template literal

let intro = `Im ${name} and I live in ${city}`;

console.log(intro);

// bigint

let largerNum = 12n;

console.log(typeof largerNum);

let num3 = 9876543219876541n;

let num4 = 9876543219876542n;

console.log(num3 == num4);

// 5 object

let person = {
  firstName: "salman",
  lastName: "shaikh",
  age: 45,
};

console.log(typeof person);

// 6 undefined

let num5; // undefined

console.log(typeof num5); // undefined

// 7. null

let num6 = null;

console.log(typeof num6); // object

// 8. symbol

let unique1 = Symbol("this is sybmol");

let unique2 = Symbol("this is sybmol");

console.log(typeof unique2); // symbol
