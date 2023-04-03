function sum(a, b) {
  return a + b;
}
console.log("sum" + sum(3, 4, 6))
// returns 7

function sumA(a, b) {
  // Removed the parameters a and b since they are not used
  let total = 0;
  // Changed 'arguments' to 'arguments' object to allow the function to receive any number of arguments
  for (let value of arguments)
    total += value;
  console.log("sumA" + arguments); // not working as expected
  // Return the total sum of all arguments, not just a + b
  return total;
}


console.log(sumA(3, 4, 6))
console.log(sumA(3, 4, 6))
// returns 7


function sumR(...args) {
  //reduce method
  return args.reduce((a, b) => a + b);
}
console.log(sumR(1, 2, 3, 4, 5, 10));
// returns 25

// This code defines a function called sumR that uses the reduce method to sum up any number of arguments that are passed to it using the spread operator ...args.

// Here's a step-by-step explanation of what's happening in the code:

// The function sumR is defined with a parameter ...args, which uses the rest parameter syntax to allow any number of arguments to be passed to the function.

// Inside the function, the reduce method is used to reduce the array of arguments to a single value.

// The reduce method takes a callback function as an argument, which is executed for each element of the array. The callback function receives two arguments: the accumulator (a) and the current element of the array (b).

// In this case, the callback function simply adds the accumulator and the current element together (a + b).

// The initial value of the accumulator is not provided, so it defaults to the first element of the array (args[0]).

// The reduce method returns the final value of the accumulator after all the elements of the array have been processed.

// The sumR function returns the final value of the accumulator, which is the sum of all the arguments passed to the function.

// Finally, the console.log statement calls the sumR function with a series of numbers (1, 2, 3, 4, 5, 10) and logs the result (25) to the console.

// Overall, this code is a concise and elegant way to sum up any number of arguments using the reduce method, which is a powerful tool for manipulating arrays in JavaScript.

// this is how it should be done



function sumD(discount, ...prices) {
  const total = prices.reduce((a, b) => a + b);
  return total * (1 - discount);
}
console.log(sumD(0.1, 20, 30));