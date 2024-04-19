// * [unimportant comment]
// todo [pending work] 
// ! [error]
// ? [doubt]

// filter is use to filter out set of elements
// input array & callback function are requried.
// get even number


function my_filter(arr, callback) {
    const new_array = [];

    for(let i = 0; i < arr.length; i++) {
        if(callback(arr[i]))
            new_array.push(arr[i]);
    }

    return new_array;
}

function isEven(number) {
    return number%2 === 0;
}

module.exports = {my_filter,isEven};