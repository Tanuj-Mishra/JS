// * [unimportant comment]
// todo [pending work] 
// ! [error]
// ? [doubt]

const arr = [1,2,3,4,5];

const map_arr = arr.map(function(element) {
    return element * element;
})
console.log(map_arr);


const filter_arr = arr.filter(function(element) {
    return element%2 == 0;      // return even elements
})
console.log(filter_arr);

const sum_of_arr = arr.reduce(function(accumulator,element){
    accumulator += element;
    return accumulator;
},0)
console.log(sum_of_arr);
