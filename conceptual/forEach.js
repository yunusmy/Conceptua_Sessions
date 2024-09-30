const arr = [1, 3, 4, 6, 78, 9, 23, 3];

for(let item of arr){
  console.log(item);
}

// forEach, map
//  const a = (item) =>
// array.forEach()
// function show(a) {
//   console.log(a)
// }


// const show =(a)=> console.log(a)

let sum = 0;

arr.forEach((item) => {
  sum += item;
})
console.log(sum);
// const show = (a) => {
//   console.log(a)
// }
const result = arr.forEach((a) => a)

console.log(result);