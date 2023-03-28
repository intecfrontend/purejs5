const circle = {
  radius: 1

};

circle.color = 'yellow';
circle.draw = function () { };

console.log("circle yellow radius 1" , circle);

// delete circle.color;
delete circle.draw;
console.log("circle2" , circle);

// I had to go back to a , ipv +


