const userEmail = "Mukul@123";

if(userEmail){
    console.log("Got user email");
} else {
    console.log("Dont have user");
}

// falsy values
// false, 0, 0-, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

// const checkEmpty = [];

// if(checkEmpty){
//     console.log("it is empty");
// }

// check obj empty
const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}

//nullish coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
val1 = null ?? 10 // it checks first is right to usko print krata hai nahi to second
// like val1 ki val null this isliye next val 10 print hui hai

console.log(val1);


mv = undefined ?? 15 //=> 15 because mv is not defined
console.log(mv);

let val2;
val2 = null ?? 10 ?? 50;
console.log(val2);//=>10 because val2 is null if not null so print 50

//Terniary operator
// condn ? true : false

const bikePrice = 8000;
bikePrice <= 8000 ? console.log("Price is less than 8000") : console.log("price is greater than 8000");