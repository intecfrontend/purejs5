// Making a circle object and giving some variables
// FACTORY FUNCTION

function createCircle(radius) {
  return {
    radius: radius,
    //you can write radius here
    draw: function () { console.log('drawing circle') }
    // draw(){console.log('drawing circle')}
  }
}
// CONSTRUCTION FUNCTION
// COMPARED TO FACTORY : use PasCal notation and this and new
// consider this as a new object
function Circle(radius) {
  this.radius = radius;
  //adding a new property to the empty object
  this.draw = function () { console.log('drawing circle'); };
}
const circle = new Circle(1)

console.log(circle);
delete circle.radius;
console.log(circle);

// changing an const object by adding or removing properties

