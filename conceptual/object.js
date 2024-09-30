const myInfo = {
  name: "yunus",
  age: 29,
  address: 'faridpur',
  sosurName: 'sheikh',
  sosurBari: 'b.Barih',
  contact: {
    phone: '01681137161',
    email: "yunusmd@gmail.com",
  },

};

// const obj2 = {...myInfo};

// obj2.married = false;
// obj2.age = 30;

// console.log(myInfo);
// console.log(obj2);

// const { age:myAge,name } = myInfo;
// // console.log(myAge,name);
// const { contact: { phone } } = myInfo;
// console.log(phone);

// object access: dot notation ,bracket notation

// const x = "name";

// console.log(myInfo.age)
// console.log(myInfo['name'])
// console.log(myInfo[x])

for (let key in myInfo) {
  console.log(myInfo[key]);
}