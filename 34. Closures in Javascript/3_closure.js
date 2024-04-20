// * [unimportant comment]
// todo [pending work] 
// ! [error]
// ? [doubt]

function parentFunction() {
    const a = 5;

    function childFunction() {
        console.log(a);
    }

    return childFunction;
}

const result = parentFunction();
console.log(result);
result();
