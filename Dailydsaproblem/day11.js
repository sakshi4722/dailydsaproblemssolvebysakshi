//Q:-write a function that takes an array  of integers as input and removes any duplicate elemnts, returning a new array with only the unique elemnts.

const removeDuplicates = (arr) => {
    let newArr = [...new Set(arr)]
    console.log(newArr);
}


console.log(removeDuplicates([1, 2, 3, 2, 1, 4]));
console.log(removeDuplicates([5, 6, 7, 7, 8, 8, 9]));
console.log(removeDuplicates([1, 2, 3, 4]));
console.log(removeDuplicates([]));