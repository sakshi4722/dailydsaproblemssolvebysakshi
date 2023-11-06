function haveSameLastDigit(num1, num2) { 

	// Getting last digit using % operator 
	const lastDigit1 = num1 % 10; 
	const lastDigit2 = num2 % 10; 

	// Return if last digits are same or not 
	return lastDigit1 === lastDigit2; 
} 

const number1 = 123; 
const number2 = 456; 

// Calling function with arguements 
const result = haveSameLastDigit(number1, number2); 

// Giving output 
console.log(result);
