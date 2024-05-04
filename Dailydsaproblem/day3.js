//Q:3- write a function called checktriangleType that takes three parameter represting the lenghths of sides of a tringle. the function should return a string indicating the type of triangle  : "isosceles" or "sclene".

const checktriangleType = (a,b,c) =>{
    if(a===b && b===c) return "equilateral";
    if(a === b || b === c || a === c) return "isosceles";
    return "scalene"
};





console.log(checktriangleType(3, 3, 3)); // equilateral
console.log(checktriangleType(3, 4, 3)); // isosceles
console.log(checktriangleType(5, 8, 6)); //scalene