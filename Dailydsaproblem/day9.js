//Q:- write a function arrayAreEquale that takes two arrays arr1 nd arr2 input and returns true if the arrays are equal 9ex. contain the same elements in the same order0,and false otherwise.

const arrayAreEquale = (arr1, arr2) => {
if(arr1.length !== arr2.length) {
    return false
}
 return arr1.every((curVal, index) => curVal === arr2 [index] )
}




// ex- usage
console.log(arrayAreEquale([1, 2,3], [1, 2, 3]));
console.log(arrayAreEquale([1, 2,3], [1, 2, 4]));
console.log(arrayAreEquale([], []));