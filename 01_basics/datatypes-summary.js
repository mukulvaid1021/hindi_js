// categorization of datatypes on the basis of how to store and retrive data in memory
// first => primitive

// 7 => string, Number, Boolean, null, undefined, Symbol, BigInt

console.log(typeof arena); // =>Arena is undefined

let empname = "Mukul"
console.log(typeof empname); //=>string

let bignum = 345654333566776655555444n
console.log(typeof bignum); // => bigint

const isloogedIn = false;
console.log(typeof isloogedIn); // => boolean

// refrences ke basis pr (non-primitive)

// Array, Objects, Functions

const heros = ["Ironman", "captain America", "black panther"]
console.log(typeof heros);  // => object

let score = null;
console.log(typeof score); // => object

const myfunction = function() {
    console.log("hello world");
}

console.log(typeof myfunction); //=> function

let myobj = {
    name : "Mukul",
    age : 20
}

console.log(typeof myobj); // =>object

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 2 types of memory stack(primitive), heap(non-primitive)

let myyoutubename = "abcde@gmail.com";

let anotherYoutubename = myyoutubename;
anotherYoutubename = "carryminativines";

console.log(myyoutubename); // => abcde@gmail.com
console.log(anotherYoutubename); // => carryminativines because it takes copy not a value

// point=> is change in copy not in actual data (stack)

// lets take another example 

let userone = {
    email : "mukul@gmail.com",
    upi : "user@ybl"
}

let usertwo = userone; // user2 take refrence from user1
usertwo.email = "vaid@gmail.com"; 

console.log(userone.email); // => vaid@gmail.com
console.log(usertwo.email); // => vaid@gmail.com

// both user2 take refrence from user1 when user two change any thing in user1 same change reflects in user1 that why both data is same
// in heap take refrence from one so updaton seen in both