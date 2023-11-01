var num1 = 5;
var num2 = 90;
var num3 = 135;
var num = num1 * num2 * num3;

for(var i = 1; i<=num ; i++) {
    if(i % num1 == 0 && i % num2 == 0 && num3 == 0){
        break;
    }
}
console.log(i)