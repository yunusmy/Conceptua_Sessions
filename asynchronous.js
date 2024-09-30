async function getData() {

  try { 
    
  const result = await fetch('https://jsonplaceholder.typicode.com/todos/1');

  const data = await result.json();

  console.log(data);
  } catch (err) {
    console.log("err")
  }

}


function bigWork() {
  
  return getData();
}

(async function () {
  const yunus = await bigWork()

})();
console.log('need to use the pesponse')