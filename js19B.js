let x = { value: 10 };
let y = x

x.value = 20;

console.log("obj ref type : ", x);
console.log("obj ref type : ", y);
//x and y are pointing to the same address in memory
// objects are copied by address reference

let a = 10;
let b = a

a = 20;

console.log("prim value ref type : ", a);
console.log("prim value ref type : ", b);
//variables are independant


let nb = 10;
function increase1(nb) { nb++, console.log("nbIN", nb), nb + 2 }
increase1(nb);
console.log("nbIN", nb)
// never increases

let ob = { value: 10 };
function increase2(ob) { (ob.value)++ }
increase2(ob);
console.log("obOUT", ob)