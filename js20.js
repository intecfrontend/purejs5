// make a date object changing to summer hour

const now = new Date();
const date1 = new Date('April 25 2021 01:00');
const date1n = new Date(2021, 03, 25, 01, 0, 0);

now.setHours(03);
date1.setHours(03);
date1n.setHours(03);
date1n.setHours(02, 21, 22);

console.log("now " + now);
console.log("date1 " + date1);
console.log("date1n " + date1n);


// make an object out of your address using the object litteral syntax lesson 62

let myAddress = {
  street: 'Soldatenstraat',
  city: 'Berchem',
  zip: 'BE1082',
}

myAddress = {
  street: 'a',
  city: 'b',
  zip: 'c',
}

function showAddress(myAddress) {
  for (let key in myAddress)
    console.log(key, myAddress[key])
}

showAddress(myAddress)


// Make an address object using constructor function

let address1 = new Address('Schoolstraat', 'Berchem', '26')
// let address2 = new Address('a', 'b', 'c')

function Address() {
  this.street = "eeee";
  this.city = "bbbb";
  this.zip = 9000;
}
console.log("newaddress" + Address.street)
// function areEqual(address1, address2) { return address1.street === address2.street && address1.city === address2.city && address1.zip === address2.zip }
// function areSame(address1, address2) { return address1 === address2; } //they are pointing to the same space in memory
// console.log(areEqual(address1, address2));
// console.log(areSame(address1, address2));