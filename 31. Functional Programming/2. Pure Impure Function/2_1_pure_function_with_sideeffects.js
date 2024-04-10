// * [unimportant comment]
// todo [pending work]
// ! [error]
// ? [doubt]


function sum(a,b) {
    console.log('Sum is:',a+b);             // side effects
}

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\nFirst Call');
sum(2,3);

a = 10;

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\nSecond Call');
sum(2,3);
