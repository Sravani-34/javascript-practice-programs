//JavaScript Program to Check if the Numbers Have Same Last Digit 
function haveSameLastDigit(num1, num2) { 

	let lastDigit1 = num1 % 10; 
	let lastDigit2 = num2 % 10; 
	return lastDigit1 === lastDigit2; 
} 
 var result =haveSameLastDigit(126,456); 
console.log(result);
