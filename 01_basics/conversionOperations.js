let score = 33;
let score2 = "45";
let score3 = "334de";
let score4 = null;

// console.log(typeof score);
// console.log(typeof (score2));

let valueInNumber = Number(score2)
console.log(typeof valueInNumber);
console.log(valueInNumber);

let convertInNumber = Number(score3)
console.log(convertInNumber); //=>NaN

let convertInNum = Number(score4)
console.log(convertInNum);//=>0

//conversion in to number
// "33" => 33
// "33abc" => NaN
// true => 1; false => 0
// "" => false
// "mukul" => true

let isLoggedIn = 1;

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

let someNumber = 56;

let stringNumber = String(someNumber);
console.log(stringNumber);//=>56
console.log(typeof stringNumber);//=> string