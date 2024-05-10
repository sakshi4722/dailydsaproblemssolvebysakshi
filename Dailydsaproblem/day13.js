//Q:-write a function called isPowerOfTwo that takes an integer num as input and returns true if num is power of two, and false otherwise.

const isPowerOfTwo = (num) => {
let op = false;
for(let i=1; i<num; i++){
if(2**i===num){
    op = true
}
}
return op
}




console.log(isPowerOfTwo(8));
console.log(isPowerOfTwo(7));