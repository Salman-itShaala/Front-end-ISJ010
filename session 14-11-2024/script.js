// function

function greet() {
  return "Hello world";
}

const greetingMessage = greet();

// sayGoodBye

function sayGoodBye() {
  console.log("Bye!!");
}

// sayHello

function sayHello() {
  alert("Hello how are you??");
}

function askName() {
  // prompt returns string value
  const userName = prompt("Please enter your name");
  console.log("hello how are you, " + userName);
}

function confirmUserAge() {
  // confirm returns true or false
  const isAbove18 = confirm("Are you above 18?");
  // isAbove18 - true / false

  if (isAbove18) {
    console.log("Congratulations you can vote");
  } else {
    console.log("Sorry you can not vote");
  }
}

// take a input from user and add 3 to that number,
// then show that result in alert box

function add3() {
  const number = prompt("Enter a number"); // string
  alert(+number + 3);
}

function add() {
  const num1 = prompt("Enter first number");
  const num2 = prompt("Enter 2nd number");

  alert(+num1 + +num2);
}

function getRandomNumber() {
  // this will return random number between 0 to 500
  let intRandom = Math.floor(Math.random() * 500); // 2
  console.log(intRandom);
}

const names = ["salman", "raju", "shyam", "abhishek", "ahish", "satish"];

// names[]
