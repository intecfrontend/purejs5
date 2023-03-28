
const numbersB = [924, 91, 92, 93, 94, 9222, 923];
const numbersC = [...numbersB];
numbersC.pop();
console.log(numbersB);
console.log(numbersC);

const [a, b, _, d, ...rests] = numbersB;
console.log(a)
console.log(b)
console.log(d)
console.log(rests)
