const petOwner = {
  name: 'Jolonto kholil',
  contact: {
    phone: '01681137161',
    email: 'yunusmd804@gmail.com',
  },
  pet: {
    name: 'Lofie',
    info: {
      color: 'black',
      weight: '2.5kg',
    },
  },
};


console.log(petOwner.name);
// optional chaining ?
console.log(petOwner.address?.home);
console.log(petOwner.contact.phone);
console.log(petOwner.pet.info.color);