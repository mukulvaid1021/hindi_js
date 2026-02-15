const score = 400
console.log(score); // => 400

const balance = new Number(400)
console.log(balance); // => define in object so ans is [Number: 400]

console.log(balance.toString().length);
console.log(balance.toFixed(1)); // => 400.0
console.log(balance.toFixed(2)); // => 400.00

const othernumber = 123.4568
console.log(othernumber.toPrecision(4));

const hundreds = 100000;
console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++++ Maths +++++++++++++++++

console.log(Math);
console.log(Math.abs(-6)); // => 6
console.log(Math.round(4.9));// => 5
console.log(Math.ceil(4.3));// =>5 upper value
console.log(Math.floor(4.3));// => 4 lower value

console.log(Math.min(4,6,2,1,9));//=>1
console.log(Math.max(3,9,6,10,14));//=>14

console.log(Math.random());

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);