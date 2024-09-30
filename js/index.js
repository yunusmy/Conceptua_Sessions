function loadUser() {
  fetch('https://jsonplaceholder.typicode.com/users')

  .then(res => res .json())
    .then(data => displayUsers(data))
  
}

function displayUsers(data) {
  const ul = document.getElementById('users-list');
  for(const user of data){
    console.log(user.name)
    const li = document.createElement('li');

    li.textContent = user.name;
    ul.appendChild(li);
  }
}