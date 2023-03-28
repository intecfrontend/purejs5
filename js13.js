// loops

// const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

// let text = "";
// for (let i = 0; i < cars.length; i++) {
//  console.log(text += cars[i] + '     ') ;
// }

// https://www.w3schools.com/js/tryit.asp?filename=tryjs_loop_for

// for (let i = 0; i <= 5; i++){
//   if (i % 2 !== 0) console.log(i)
// };

let i = 0;
// while ( i <= 5 ){
//   if (i % 2 !== 0) console.log(i); i++;
// };
// while and do-while require an external let i
do {
  if (i % 2 !== 0) console.log("dw " + i); i++;
} while (i <= 5);
//do it once at least no matter true or false