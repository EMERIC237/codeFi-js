console.log("Hello World!");

const name = "John";
console.log(`Hello ${name}!`);



console.log(`The area of the rectangle is ${area}`);

const buttonArea = document.getElementById("area");

buttonArea.addEventListener("click", () => {
  const length = prompt("Enter the length of the rectangle");

  const width = prompt("Enter the width of the rectangle");

  const area = length * width;
  const perimeter = (length + width) *;
  console.log("the area of your resctangle is: " + area);

});
