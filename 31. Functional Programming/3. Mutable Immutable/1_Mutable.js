// * [unimportant comment]
// todo [pending work]
// ! [error]
// ? [doubt]

const person1 = {
    name:'ram'
}

const person2 = person1;
person2.name = 'shyam';
console.log(person1,person2);

// ------------------------------------------------------------------------------------------------

// ? why there is no such concept here?
let id1 = '1'
let id2 = id1;
id2 = '5';
console.log(id1, id2);

