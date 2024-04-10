// * [unimportant comment]
// todo [pending work]
// ! [error]
// ? [doubt]


let a = 5;

function sum(b) {
    console.log('Sum is:',a+b);
}

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\nFirst Call');
sum(1);

a = 10;

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\nSecond Call');
sum(1);
