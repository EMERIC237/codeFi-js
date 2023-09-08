/**-------------------------------- {WEEK 3} -----------------------------------------**/
// Exercise 1
const greet = (name) => console.log(`Hello ${name}!`);

// Exercise 2
const multiply = (a, b) => a * b;

// Exercise 3
const person = {
  name: "Emeric",
  age: 21,
  gender: "Male",
};

console.log("a new person: " + person);

// Exercise 4
const car = {
  make: "Toyota",
  model: "SUV",
  year: 2022,
};

console.log("a new car: " + car);

// Exercise 5
function reverseString(str) {
  let name = "";
  for (let index = str.length-1; index >= 0; index--) {
    name += str[index];
  }
  return str.split("").reverse().join();
}

console.log("reverse String: " + reverseString("Hello"));

// Exercise 6
function calculateArea(radius) {
  return Math.PI * radius * radius;
}

console.log("Area circle: " + calculateArea(5));


// Exercise 7
// how run this when the page open
function welcome() {
  const today = Date.now()
  const formatDate = today.toLocaleString();
  // Get the element
  const element = document.getElementById("welcome")
  element.innerText = `Welcome to our site. Today is ${formatDate}`
}
welcome();

