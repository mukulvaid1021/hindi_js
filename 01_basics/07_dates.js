// Dates

// let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());

let myCreatedDate = new Date(2026,1,6);
console.log(myCreatedDate.toDateString());// => Fri Feb 06 2026 gives date only this format


// let DatewithTime= new Date(2026,1,6,10,13);
// console.log(DatewithTime.toLocaleString());// =>2/6/2026, 12:00:00 AM gives date with time

// let newDate = new Date("2026-02-06");
// console.log(newDate.toLocaleString());

// let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(Math.floor(Date.now()/1000));

let aajTak = new Date();
console.log(aajTak);
console.log(aajTak.getDate());
console.log(aajTak.getDay());
console.log(aajTak.getTime());