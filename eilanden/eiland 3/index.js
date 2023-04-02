const eilanden = [{
  id: 1,
  name: "Koh Samui",
  price: "10€",
  img: "./images/eiland.jpg",
},
{
  id: 2,
  name: "Koh PhiPhi",
  price: "20€",
  img: "./images/eiland2.jpg",
},];

let imgplaats = document.getElementById("Samui");
let imgplaats2 = document.getElementById("Samui2");

let Title = document.getElementById("SamuiT");
let Title2 = document.getElementById("SamuiT2");

const lookupIMG = eilanden.map(item => item.id === 1);
const lookupIMG2 = eilanden.map(item => item.id === 2);
const lookupIMG3 = eilanden.map(item => item.img);
console.log("lookupIMG3" + lookupIMG3);

imgplaats.src = lookupIMG3;
// imgplaats.src = lookupIMG.img;
// imgplaats2.src = lookupIMG2.img;
// Title.innerHTML = lookupIMG.name;
// Title2.innerHTML = lookupIMG2.name;


// Title.innerHTML = "Hello"

// imgplaats.src = ;