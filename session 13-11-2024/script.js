// functions

//  function declaration

// global

function greet() {
  // local
  const userName = "salman";
  console.log("Good afternoon " + userName);
}

// call
// write a function which will take
// two number input and perform addition on them

// let and const are block scoped
// var is function scoped

function add(num1, num2) {
  if (num1 + num2 > 100) {
    var userName = "salman";
  } else {
    let userNam2 = "ram";
  }
  console.log(userName);
}

// console.log(add(12, 23));

// write a function which will take a name as input
// and greet Hello how are you `name` ?

// `Hello how are you ${name}`;
