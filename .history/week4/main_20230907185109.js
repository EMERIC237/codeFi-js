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
const globalVar = "I'm global!";

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
console.log(innerFunction(2));
