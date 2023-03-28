//finding primitives 

const numbers = { name: [] };

numbers.name = [1, 2, 3, 1, 4];
console.log(numbers.name.indexOf(1));


const myNumbers = [1, 2, 3, 1, 4];
console.log(myNumbers.indexOf(1)); console.log(myNumbers.lastIndexOf(1)); console.log(myNumbers.IndexOf(1, 2));
//meaning of 2 skip index 0 and 1 
//-1 means not existant
console.log(myNumbers.indexOf(1) !== -1)
// this means, there is a 1 or
console.log(myNumbers.includes(1))




//finding reference types reference type stores the address of the location where the actual value is stored instead of the value itself.


const myNumbers1 = [1, 2, 3, 1, 4];
console.log(myNumbers1.indexOf(1)); console.log(myNumbers.lastIndexOf(1)); console.log(myNumbers.IndexOf(1, 2));
//meaning of 2 skip index 0 and 1 
//-1 means not existant
console.log(myNumbers1.indexOf(1) !== -1)
// this means, there is a 1 or
console.log(myNumbers1.includes(1))
