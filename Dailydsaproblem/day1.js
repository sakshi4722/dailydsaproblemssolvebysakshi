//Q.-1= write a function findLongestWord that takes a string as input and returns the longest word in he string. if there are multiple longest words, return the first one encountered.

const findLongestWord = (str) => {
    if (str.trim().length === 0) {
        return false;
    }

    words = str.split(" ");
    words = words.sort((a, b) => b.length - a.length);
    return words;    
};

console.log(
    findLongestWord("Watch Thapa Technical javascript cource on youtube")
);