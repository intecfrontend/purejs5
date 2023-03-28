//new methods
const numbers = [1, -22, 33, -2, -3];

const allPositive = numbers.every(function (value) { return value >= 0; });
console.log("numbers", allPositive)
const allPositive2 = numbers.some(function (value) { return value >= 0; });
console.log("numbersSome", allPositive2);

//filter methods
const filteringPositive = numbers.filter(function (value) { return value >= 0; });
const filteringPositive2 = numbers.filter(v => v >= 0);
console.log("numbers", filteringPositive)

//MAPPING
const items = filteringPositive.map(v => "<li>" + v + '</li>');
console.log("map", items);

// returning an object
const itemsV = filteringPositive.map(v => {
  return { v: v };
});
// the return makes the {} an object and not a code block or put ({ value: v}) (ipv return { value: v}

console.log("itemsV", itemsV);

