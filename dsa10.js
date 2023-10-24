// if isprime(n)  {
//     if (n < 2)
//     return `${n} is not a prime`
// for(let i =2; i < n; i++) {
//    if ( n % i === 0) {
//     return `${n} is not a prime number`
//    }
// }
// return `${n} is a prime number`
// }
// console.log(isprime());
const number =(2) ;
let isprime = true;

if (number === 1) {
    console.log("1 is neither prime or nor composite number.");

}
else if (number > 1) {
    for (let i=2; i<number; i++){
        if (number % i == 0) {
            isprime = false;
            break;
        }
    }

if (isprime) {
    console.log(`${number} is a prime number`);
}
else {
    console.log("the number is not a prime number")
}
}