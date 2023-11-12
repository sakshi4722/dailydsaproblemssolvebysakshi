function decimalToBinary(N) { 
	return (N >>> 0).toString(2); 
} 

let N = 10; 
let binary = decimalToBinary(N); 
console.log( 
	"The binary representation of given number is:- " + binary);
