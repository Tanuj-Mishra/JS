// * [unimportant comment]
// todo [pending work]
// ! [error]
// ? [doubt]

const person1 = {
    name:'ram'
};

// using, shallow and deep copy
// was not coded in lecture, but was mentioned that it can also be used


// using, assigning an object
const person2 = Object.assign({}, person1);

// using spread operator
const person3 = {...person1};        

person2.name = 'shyam';
person3.name = 'ghanshyam';

console.log(person1, person2, person3);
