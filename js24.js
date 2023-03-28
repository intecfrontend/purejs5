// const numbers = [3, 4];

// // follow the logic of numbers
// numbers.push(5, 6);
// numbers.unshift(1, 2);
// console.log("looking again :" + numbers);

// // deleting first numbers
// numbers.shift();
// console.warn("looking" + numbers);
// const students = ["john", "mary", "dirk", "peter"]
// // students.splice(2, 1);

// // console.log("looking2.1" + students.splice(2, 1));





// // // add a and b after index 2 deleting 0
// numbers.splice(2, 1);

// // numbers.splice(0, numbers.length ); get rid of array
// // numbers.length = 0;
// // numbers = []; if you did,'t clone the array let another = numbers

// console.warn(numbers);

// // Array == reference type;
// // // localising the value == indexOf see js22.js

// //  students.pop();
// // console.log("looking2.1" + students.splice(2, 1));
// // // pops aways the last number;

// // // THE SPREAD OPERATOR
// const first = [100, 200];
// const last = [300, 400];

// const COMBINED = [...first, 'a', ...last];



// // // If the index dxoesn't interest you you can do this

// for (let item of COMBINED) console.log("for of", item);


// const joined = COMBINED.join(', ')
// console.log(joined)
// // returns a STRING with comma's

// const message = 'Hello there';
// const parts = message.split(' ');
// // https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_split
// console.log(parts);

// // usefull to make a url (slug)

// const sorted = COMBINED.sort();
// console.log("sort" + sorted);

// // would be usefull for intec on sorting course dates.
// var array = [{ id: 1, date: 'Mar 12 2023 10:00:00 AM' }, { id: 2, date: 'Mar 8 2022 08:00:00 AM' }, { id: 3, date: 'Mar 8 2022 08:00:00 AM' }, { id: 4, date: 'Mar 8 2022 07:59:00 AM' }];
// const resultSort = array.sort(function (a, b) {
//   var c = new Date(a.date);
//   var d = new Date(b.date);
//   return c - d;
// });
// console.log(resultSort)

// // https://www.udemy.com/course/javascript-basics-for-beginners/learn/lecture/10688992#overview
// // 3.25

// // https://www.youtube.com/watch?v=EdIKIf9mHk0&list=PLOmdoKois7_FK-ySGwHBkltzB11snW7KQ

// // Following the ascii (American Standard Code for Information Interchange) table you have to watch out with capitals, they come first 
// var arrayNames = ["zorro", "Zineb", "Peter", "Anna"];
const namesSort = arrayNames.sort(function (a, b) {
//   const nameC = a.toLowerCase();
//   console.log("nameC" + nameC);
//   const nameD = b.toLowerCase();
//   console.log("nameD" + nameD);


//   if (nameC < nameD) return -1;
//   if (nameC > nameD) return 1;
//   return 0;
// });
// console.log("namesSort" + namesSort);
