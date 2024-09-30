const numbers = [34, 56, 78, 67, 89, 112];

// let find = null;
// for (let item of numbers) {
//   if (item > 40) {
//     find = item;
//     break;

//   }
// }
// console.log(find)

const result =numbers.find((item)=> item >50 && item %2 ==0);

console.log(result);