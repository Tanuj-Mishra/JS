// * [unimportant comment]
// todo [pending work] 
// ! [error]
// ? [doubt]


// filter is use to filter out set of elements.
// input array, callback function's implementation, accumulator's initial value are requred.
// get sum of all numbers.


function my_reduce_polyfill(arr,intialValue) {
    let result = intialValue;

    for(let i = 0; i < arr.length; i++) {
        result += arr[i];
    }

    return result;
}


module.exports = {my_reduce_polyfill};