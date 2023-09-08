// Exercise1 of Week 4
function outerFunction() {
	let outerVar = "I'm outside!";

	function innerFunction() {
		let innerVar = "I'm inside!";
		console.log(outerVar); // Can we access outerVar?
    // Yes, we can access outerVar because outerVar is glo
		console.log(innerVar); // Can we access innerVar?
    // Yes, we can access innerVar because innerVar is in the scope of innerFunction
	}

	innerFunction();
}

outerFunction();
*