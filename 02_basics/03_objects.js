//note : constructor se banata hai to singleton banta hai
// but literals se nahi banta hai

// object literals

const mySym = Symbol("MZ");

const User = {
    name : "Mukul",
    "fullName" : "Mukul vaid",
    [mySym] : "MZ",
    age : 18,
    location : "Ghaziabad",
    email : "mv@google.com",
    isLoggedIn : false
}

// console.log(User["fullName"]);
// console.log(User.email);
// console.log(User.fullName);
// console.log(User["email"]);

// console.log(User);

// User.email = "ma@gmail.com"; // change email like this
// console.log(User);
// Object.freeze(User); // changes are not applied 
// User.isLoggedIn = true;
// console.log(User);

User.greeting = function(){
    console.log("Hello JS user");
}

console.log(User.greeting);//=> console.log(User.greeting) prints the function itself
console.log(User.greeting()) //=> not its output — to run it you must write User.greeting()

User.greetingTwo = function(){
    console.log(`Hello, ${this.fullName}, what are you doing`) // this -> ek object ke andar kya property hai usko refrence krne ke liye this likhta hai
}
console.log(User.greetingTwo());