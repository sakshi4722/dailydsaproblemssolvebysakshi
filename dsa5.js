const num1 = 5;
const num2 = 6;
const num3 = 7;

if (num1 >= num2 && num1>=num3) {
    largest = num1;
}
else if (num2 >= num1 && num2 >= num3) {
    largest = num2
}
else {
    largest = num3;
}
console.log("the largest number is" + largest);