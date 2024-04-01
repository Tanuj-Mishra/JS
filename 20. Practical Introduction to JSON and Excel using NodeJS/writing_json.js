// * [unimportant comment]
// todo [pending work] 
// ! [error]
// ? [doubt]

// todo read data from json, add some data to it, save it.

const fs = require('fs');
let data = require('./input.json');
data.push(
    {
        "name": "billa",
        age:25
    }
);

data = JSON.stringify(data);
console.log(data);

fs.writeFileSync('output.json',data);