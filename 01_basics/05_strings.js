const empName = "Mukul";
const age = 20;

console.log(empName + age + "value"); //wrong way
// use string interpolation
console.log(`Hello my name is ${empName} and my age is ${age}`) //right way

const gamename  = new String('Mukulvaid');

console.log(gamename[0])
console.log(gamename.__proto__)

console.log(gamename.length);
console.log(gamename.toLocaleUpperCase())
console.log(gamename.charAt(5))
console.log(gamename.indexOf('v'))

const newString = gamename.substring(0,4);
console.log(newString);

const string = "   mukul    ";
console.log(string);
console.log(string.trim());

const url = "https://mukul.com/mukul%30vaid";
console.log(url.replace('%30', '-'));