// https://www.w3schools.com/jsref/jsref_obj_array.asp


let namesArray = [3, -10, 8, 18, -10, 3.14, -227]
// ["!", "zara", "Zineb", "Peter", "Anna", "John"];

let namesObject =
  [{
    JAVAstudents: [{ id: 01, name: "zorro", birthday: 'January 26 2021' },
    { id: 05, name: "!", birthday: 'April 15 2020' },
    { id: 02, name: "Zineb", birthday: 'August 25 2019' },
    { id: 03, name: "Peter", birthday: 'September 05 2001' },
    { id: 04, name: "Anna", birthday: 'January 25 2021' }]
  }, {
    WDstudents: [{ id: 01, name: "zorro", birthday: 'January 26 2021' },
    { id: 05, name: "!", birthday: 'April 15 2020' },
    { id: 02, name: "Zineb", birthday: 'August 25 2019' },
    { id: 03, name: "Peter", birthday: 'September 05 2001' },
    { id: 04, name: "Anna", birthday: 'January 25 2021' }]
  }]


let namesObjectId =
  [{ id: 01, name: "zorro", },
  { id: 05, name: "!", },
  { id: 02, name: "Zineb", },
  { id: 03, name: "Peter", },
  { id: 04, name: "Anna", }]
// order an array of names

// namesArray.sort((a, b) => b - a);
namesArray.sort((a, b) => b - a).reverse();

// });


namesObject.sort(function (a, b) {
  return new Date(b.birthday) - new Date(a.birthday);
});

namesObjectId.sort(function (a, b) {
  if (a.id < b.id) {
    return -1;
  }
  if (a.id > b.id) {
    return 1;
  }
  return 0;
});
// http://support.ecisolutions.com/doc-ddms/help/reportsmenu/ascii_sort_order_chart.htm
// console.log("sortedArray ", namesArray);
console.log("sortedObject ", namesObject);
// console.log("sortedObjectID ", namesObjectId);
