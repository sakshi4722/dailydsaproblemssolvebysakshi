//Q:- write a function that takes a string as input and returns the count of vowels in that string. consider 'a', 'e', 'i', 'o', and 'u' as vowels (both lowecase and uppercase).

const countVowels = (str) => {
let vowels = ['a', 'e', 'i', 'o', 'u']

let arr = str.split('');
console.log(arr);
let count = 0;
for(let char of arr){
    if (vowels.includes(char.toLowerCase())){
      count++  
    }
}
return count;
}



console.log(countVowels("Hello World"));
console.log(countVowels("THE quIck brOwn fOx"));
console.log(countVowels("Brrrp"));