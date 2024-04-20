// * [unimportant comment]
// todo [pending work] 
// ! [error]
// ? [doubt]

function parentFunction() {
    const a = 5;

    function childFunction() {
        console.log(a);
    }

    childFunction();
}

parentFunction();
