// * [unimportant comment]
// todo [pending work] 
// ! [error]
// ? [doubt]

// map requires two things, input array and a callback function
// input array & callback function are required.
// here we will define map, to get square of numbers.



function my_map_polyfill(arr,callback) {
    let new_array = [];

    for(let i = 0; i < arr.length; i++) {
        new_array.push(callback(arr[i]));
    }

    return new_array;
}



function getSquare(number) {
    return number * number;
}


module.exports = {my_map_polyfill,getSquare};