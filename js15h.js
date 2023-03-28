// write a number maximalisation function
let number = maxT(3, 3);
// function max(a, b) {
//   if (a > b) return a; else return b;
// };
function maxT(a, b) {
  return (a > b) ? a : (a == b) ? "equal" : b;
}
console.log(number);

// fizzbuzz excercise

function fizzBuzz(start, end){
  for(let num=start; num <= end; num++){
      if(num % 5 === 0 && num % 3 === 0){
        console.log("FizzBuzz")
      }   
      else if(num % 3 === 0){
        console.log("Fizz")
      }
      else if(num % 5 === 0){
        console.log("Buzz")
      }
      else {
        console.log(num)
      }
  }
}