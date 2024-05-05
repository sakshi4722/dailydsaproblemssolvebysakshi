// Q:- calculate the average
// write a function called calculateAvarage that takes an array of numbers as input and returns the average of those numbers.

const calculateAvarage = (arr) => {
let total = arr.reduce((accum, curElement) => accum + curElement, 0 )
console.log(total);
return total / arr.length;
}



console.log(calculateAvarage([5, 10, 2, 8]));