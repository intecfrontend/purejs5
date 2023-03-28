// Making a circle object and giving some variables
// FACTORY FUNCTION
let radius = 1;
let x = 1;
let y = 1;

// const circle = {
//   radius: 1,
//   location: {
//     x: 1,
//     y: 1,
//   },
//   isVisible: true
// }

function drawCircle() { }
function moveCircle() { }
// so move them inside the object
const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1,
  },
  isVisible: true,
  draw() { console.log('drawing circle') }
}
circle.draw();

// OOP
function createCircle() {
  return {
    radius: 1,
    location: {
      x: 1,
      y: 1,
    },
    isVisible: true,
    draw: function () { console.log('drawing circle') }
  }
}
//we do not care about location or visibility => making it more dynamic
function createCircle(radius, location) {
  return {
    radius: radius,
    location: {},
    //you can write radius here
    draw: function () { console.log('drawing circle') }
    // draw(){console.log('drawing circle')}
  }
}
function circl(radius, x, y) {
  const location = [x, y];
  return {
    radius,
    location,

  }

}
console.log(circl(5, 1, 2));
// const circle1 = createCircle(1);
// console.log(circle1);
// const circle2 = createCircle(2);
// console.log(circle2);

