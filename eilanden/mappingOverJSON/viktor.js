const myObj={
  vanila:3,
  container:"cone"
}
 let picture ="div     "

function basket(price, taste) {
  this.price = price;
  this.taste = taste;
}

var getprice = "3"

const myfinalbasket = [new basket(getprice, "vanilla"), new basket(3, "Chocolate")];



console.log(myfinalbasket);