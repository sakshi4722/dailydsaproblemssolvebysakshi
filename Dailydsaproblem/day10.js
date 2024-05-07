//Q:- WRITE A FUNCTION THAT TAKES A NUMBER AS INPUT AND RETURNS THE SUM OF ITS DIGITS.

const sumOfDigits = (num) => {
let arr = Array.from(String(num), Number)
console.log(arr);
return arr.reduce((accum, curElement) => accum += curElement, 0)

}

console.log(sumOfDigits(1234));
console.log(sumOfDigits(4321));
console.log(sumOfDigits(123456));