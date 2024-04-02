const fs = require('fs');

const promise = fs.promises.readFile('input.txt');
console.log(promise);
console.log('hello');

// on success
promise.then(function(data) {
    console.log(data.toString());
})

// on failure
promise.catch(function(error) {
    console.log(error);
})