const fs = require('fs');

console.log("Before");
fs.readFile('input.txt',callBack);
console.log("After");

function callBack(error, data) {
    if(error) {
        console.log("Error: ", error);
    }
    else {
        console.log(data.toString());
    }
}

// It will make code work asynchronously
// one thread will execute callback function, while other will continue doing it's required stuff.
