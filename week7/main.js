// Exercise #1
const myDiv = document.querySelector("#myDiv");
myDiv.style.backgroundColor = "#ADD8E6";

const paragraphs = document.querySelectorAll("p");

paragraphs.forEach((par, index) =>
  console.log(index+1 + " " + par.innerHTML + "\n")
);
