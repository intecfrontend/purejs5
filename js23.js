const courses = [
  { id: 1, name: 'f' },
  { id: 2, name: 'b' },
];
console.error("looking : " + courses.includes({ id: 1, name: 'f' }))
// returns false because: includes is for arrays not for objects because both objects have 2 different locatons in memory
// go to lastselectoption in pureJS
// you need to do it with a callback ftn
// findIndex is for finding the Index
// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_findindex
const course = courses.find(function (course) { return course.name == 'f' });
const courseArrow = courses.find(course => course.name == 'f');
// This can be shortened https://www.w3schools.com/js/tryit.asp?filename=tryjs_arrow_function2   hello = () => "Hello World!";

console.log("looking2 : ", course)
console.log("looking3 : ", courseArrow)

//73 arrow functions;

