console.log("Hello World!");

const name = "John";
console.log(`Hello ${name}!`);



console.log(`The area of the rectangle is ${area}`);

const buttonArea = document.getElementById("area");

buttonArea.addEventListener("click", () => {
  const length = prompt("Enter the length of the rectangle");

  const width = prompt("Enter the width of the rectangle");

  const area = length * width;
  const perimeter = (length + width) * 2;
  console.log("the area of your resctangle is: " + area);
  console.log("the perimeter of your resctangle is: " + perimeter);

});


const buttonIsEven = document.getElementById("isOdd");

buttonIsEven.addEventListener('click',()=>{
    const number = prompt("Enter the number you want to check");
    if(Number(number) % 2 == 0){
        console.log("The number entered is even")
    }else {
        console.log("the number entered in odd");
    }


})

const buttonList = document.getElementById("listNumber");

buttonList.addEventListener('click',()=>{
    for (let index = 1; index <= 10; index++) {
        console.log(i)
        
    }
})
