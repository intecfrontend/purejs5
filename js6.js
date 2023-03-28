function greet(name) {
  console.log("greetfunction " + name);
}

greet('John');

// you have to put strings arround because it is not a variable


//name is a parameter
// John is an argument

function greetFN(name, lastName) {
  console.log("greetfunctionFN " + name + ' ' + lastName)
}

greetFN('John');
greetFN('Dora', 'Doe');


function squareFN(number) {
  return number * number;
}
// return the result to whoever is calling this function
let number = squareFN(2);
console.log('the square is ' + number)