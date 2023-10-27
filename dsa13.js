// // program to print prime numbers between the two numbers

// // take input from the user
// const lowerNumber = parseInt(prompt('Enter lower number: '));
// const higherNumber = parseInt(prompt('Enter higher number: '));

// console.log(`The prime numbers between ${lowerNumber} and ${higherNumber} are:`);

// // looping from lowerNumber to higherNumber
// for (let i = lowerNumber; i <= higherNumber; i++) {
//     let flag = 0;

//     // looping through 2 to user input number
//     for (let j = 2; j < i; j++) {
//         if (i % j == 0) {
//             flag = 1;
//             break;
//         }
//     }

//     // if number greater than 1 and not divisible by other numbers
//     if (i > 1 && flag == 0) {
//         console.log(i);
//     }
// }
let a, b, i, j, flag; 

a = 2 
b = 11 
for (i = a; i <= b; i++) { 
	if (i == 1 || i == 0) 
		continue; 

	// flag variable to tell 
	// if i is prime or not 
	flag = 1; 

	for (j = 2; j <= i / 2; ++j) { 
		if (i % j == 0) { 
			flag = 0; 
			break; 
		} 
	} 

	// flag = 1 means i is prime 
	// and flag = 0 means i is not prime 
	if (flag == 1) 
		console.log(i); 
}
