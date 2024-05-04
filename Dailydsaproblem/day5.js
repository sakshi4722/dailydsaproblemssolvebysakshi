//Q:- WRITE A FUNCTION TO DETERMINE WHEATHER A GIVEN STRING IS A PALINDROME or not . a palindrome(means same both sides when we read) is a word, phrase, number, or other sequence of characters that reads the same forward and backword, ignoring spaces, punctution, and capitalisation.

const isPalindrome = (str) => {
str = str.toLowerCase().replace(/\W/g, "");
let r_str = str.split("").reverse().join("")
console.log(r_str);
return str === r_str ? true : false; 
}

console.log(isPalindrome("A man, a plan, a canal, panama"));
console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"));