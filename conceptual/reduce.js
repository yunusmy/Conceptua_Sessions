const numbers = [1, 2, 3, 4, 5, 6, 7];

// let sum = 0;

// for(let item of numbers){
//   sum += item;
// }

// console.log(sum);

// arr.reduce ((arr)=> {},initial value)

const sum = numbers.reduce((prev, current)=>prev + current,0);
console.log(sum);