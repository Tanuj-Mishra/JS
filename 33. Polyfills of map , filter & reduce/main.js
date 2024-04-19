// * [unimportant comment]
// todo [pending work] 
// ! [error]
// ? [doubt]

const my_map = require('./map_polyfills');
const my_filter = require('./filter_polyfills');
const my_reduce = require('./reduce_polyfills');

const input_array = [1,2,3,4,5];


const squared_array = my_map.my_map_polyfill(input_array,my_map.getSquare);
console.log(squared_array);


const even_array = my_filter.my_filter(input_array,my_filter.isEven);
console.log(even_array);


const sum_of_array = my_reduce.my_reduce_polyfill(input_array,0);
console.log(sum_of_array);
