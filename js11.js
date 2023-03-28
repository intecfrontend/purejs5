const d = new Date();
let hour = (d.getHours());
hour = 1

if (hour > 7 && hour < 12) {console.log ('Good Morning')}
else if (hour >= 12 && hour <= 18)console.log ('Good Afternoon')
  // (don't forget to repeat)
  
else console.log ('Good night');



// let m = addZero(d.getMinutes());
// let s = addZero(d.getSeconds());
// let time = h + ":" + m + ":" + s;

// function addZero(i) {
//   if (h < 10) { h = "0" + i }

// // else if return console.log ('Good night')
// else  return h};
// addZero()
// console.log("d : " + d);
// console.log("time : " + time);
// console.log("time+comment : " + time);
// console.log("h : " + h);