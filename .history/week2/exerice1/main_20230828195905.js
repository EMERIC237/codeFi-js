console.log("Hello World!");

const name = "John";
console.log(`Hello ${name}!`);

let area = 0;

console.log(`The area of the rectangle is ${area}`);

const buttonArea = document.getElementById("area");

buttonArea.addEventListener(.() => {
  const length = prompt("Enter the length of the rectangle");

  const width = prompt("Enter the width of the rectangle");

  area = length * width;
  console.log("the area of your resctangle is: " + area);
});
