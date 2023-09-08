// Exercise1 of Week 4
function outerFunction() {
  let outerVar = "I'm outside!";

  function innerFunction() {
    let innerVar = "I'm inside!";
    console.log(outerVar); // Can we access outerVar?
    // Yes, we can access outerVar because outerVar is global  to innerFunction
    console.log(innerVar); // Can we access innerVar?
    // Yes, we can access innerVar because innerVar is in the scope of innerFunction
  }

  innerFunction();
}

outerFunction();

// Exercise2 of Week 4
function mainFunction() {
  // Call the hoistedFunction here
  tryHoisting();
  // Now, declare the hoistedFunction below
  function tryHoisting() {
    console.log("I'm being hoisted!");
  }
}

mainFunction();

// Exercise3 of Week 4
function testFunction(value) {
  return () => {
    console.log(value);
  };
}
testFunction("Hello World")();

// Exercise4 of Week 4
// Declare a global variable here
let globalVar = "I'm global!";

function modifyGlobal() {
  // Try to modify the global variable here
  globalVar = "I'm not global anymore!";
  return globalVar;
}

function localScopeTest() {
  // Declare a local variable with the same name as the global variable
  const globalVar = "I'm local!";
  return globalVar;
}

// Call both functions here
console.log(modifyGlobal());
console.log(localScopeTest());

// Exercise5 of Week 4
function functionFactory(num) {
  // Return a function that makes use of 'param'
  return (multiplier) => num * multiplier;
}

// Create an instance of the inner function by invoking functionFactory with a parameter
const innerFunction = functionFactory(5);
console.log(innerFunction(2)); // => should log 10

// Exercise6 of Week 4
function hoistingTest() {
  // Try printing a variable here
  console.log(variable);

  // Declare the variable after the console.log
  var variable = "Value";
}

hoistingTest();

// Exercise7 of Week 4
function setupCounter() {
  // Define a count variable here
  let count = 0;

  return function () {
    // Increment and print the count
    count++;
    console.log(count);
  };
}

// Create a counter instance and invoke it to test
const counter = setupCounter();
counter();

// Exercise8 of Week 4
function startCounter() {
  // Declare a count variable
  let count = 0;
  return function () {
    if (count == 10) {
      count = 0;
      return;
    }
    count++;
    console.log("updated count: " + count);
  };
}

// Create a counter
const secondCounter = startCounter();
for (let i = 0; i < 15; i++) {
  secondCounter();
}

// Exercise9 of Week 4
const gameScrore = 0;
function updatedScore() {
  gameScrore++;
}

// function displayPlayer(){
//   player += ": player 1";
//   const player = "Emeric";
//   console.log("Player: " + player);
// }

// displayPlayer();



const game = {
  score: 0,
  updateScore: function () {
    this.score++;
  },
};

console
game.updateScore();
console.log(game.score);