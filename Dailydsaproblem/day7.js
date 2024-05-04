// factorial finder

//Q:-  write a function factorial that takes a non- negative integer num as input and return its factorial. the factorial of a non-negetive integer n, denoted as n!, is the product of all posotive integers less then or equal to n. the factorial of 0 is defined as 1. 

// here are some example of factorial calculations:

// factorial(0) => 1
// factorial(1) => 1
// factorial(2) => 2
// factorial(3) => 6
// factorial(4) => 24
// factorial(5) => 120

const factorial = (num) => {
    let fact = 1;
for(let i=1; i<=num; i++){
    // console.log(i);
    fact = fact * i;
}
return fact;
}

console.log(factorial(5));
console.log(factorial(0));
console.log(factorial(3));



