function sum(text, ...rest) {
  const result = rest.reduce((sum, cur) => sum + cur, 0);

  console.log(`${text} ${result}`)
}
sum('The sum is:',4,5,8,9,9,78,)




// function sum(...rest) {
//   return rest.reduce((sum, cur) => sum + cur, 0);
// }
// console.log(sum(4,5,8,9,9,78,))