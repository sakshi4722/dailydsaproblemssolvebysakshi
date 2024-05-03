// q:2- hash tag generator

//write aa function generathash to accomplish this task

const generateHash = (str) => {
    if (str.length > 280 || str.trim().length === 0) {
        return false;
    }

   str = str.split(" ");
   str = str.map((curElement) => 
 curElement.replace(curElement[0], curElement[0].toUpperCase()));

str = `#${str.join("")}`;
console.log(str);
return str;



};


console.log(generateHash("my name is sakshi mandloi"));