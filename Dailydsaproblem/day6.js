// Q:-WRITE A FUNCTION  findMAX that takes an array of numbers as input and returns the maximum number in the aaray.

 const findMax = (arr) => {
    console.log(...arr);
    return Math.max(...arr)
 }

//  console.log(findMax());

console.log(findMax([1, 5, 3, 9, 2]));
console.log(findMax([-10, -5, -3, -9, -2]));
console.log(findMax([5]));