
let one = 1;
let two = 2;
let three = 3;
let four = 4;
let five = 5;


function composition(func1, func2) {
  return func1 * func2;
}

function substraction(a, b) {
  return a - b;
}

function multiplication(a, b) {
  return a * b;
}

function division(a, b) {
  return a / b;
}

let a = composition(one, four);
let b = division(four, two);
let c = substraction(three, two);
let d = multiplication(five, two);

console.log(a);
console.log(b);
console.log(c);
console.log(d);
