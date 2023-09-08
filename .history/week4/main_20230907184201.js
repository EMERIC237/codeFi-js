// Exercise1 of Week 4
function outerFunction() {
	let outerVar = "I'm outside!";

	function innerFunction() {
		let innerVar = "I'm inside!";
		console.log(outerVar); // Can we access outerVar?
    // Yes, we can access outerVar because ou
		console.log(innerVar); // Can we access innerVar?
	}

	innerFunction();
}

outerFunction();
*