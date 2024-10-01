const user = { id: 1, name: 'Gorib Aamir', job: 'actor' };
// JavaScrip object Notation (JSON);

const stringiffied = JSON.stringify(user);

// console.log(user);
// console.log(stringiffied);

const shop = {
  owner :'alia',
  address: {
    street:'kochukhet voot er goli',
    city: 'ranbir',
    country: 'BD',
  },
    products:['laptop','mic', 'monitor', 'keybord'],

  revenue: 45000,
  isOpen: true,
  isNew:false,

}

console.log(shop);

const shopJSON = JSON.stringify(shop);

console.log(shopJSON);