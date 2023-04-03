// in the 80ties lots of exercises

// Function Declaration

//Hoisting ...
setTimeout(function () {
  console.log("This message will be printed after 0 milliseconds.");
}, 1000);


walk();
// use it before it's declaration (Hoisting)
// let move = run;
// move is hoisted but not it's assignment


function walk(){
  console.log('walk');
}

// Anonymous Function Expression
let run = function() {
  console.log('run');
};

let move = run;
run();
move();



