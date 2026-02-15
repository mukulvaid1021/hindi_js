// if

if (2 == "2") {
    console.log("executed"); // executed => if use "==" so it checks the value not data type like "2" is string
}

if(3 === "3"){
    console.log("executed");// it give nothing because "===" it strictly checks datatype with value
}

const score = 400;

if(score > 350){
    const power = "fly";
    console.log(`user power: ${power}`);// if use under curly braces it give ans outside access kre to ye error dega
    // if datatype var hota to outside {} access kr sakta hai 
}

// nested if else
//     const budget = 1000;
// if(budget > 1000){
//     console.log("bhaut kharcha ho gya");
// } else if(budget < 1000){
//     console.log("sasta mal mil gaya");
// } else {
//     console.log("Average kharcha ho gya");
// }

// using &&  or || operator

const userLoggedIn = true
const debitCard = true

if(userLoggedIn && debitCard){
    console.log("Allow to buy course");
}

const loggedInFromGoogle = true;
const loggedInFromFacebook = false;

if(loggedInFromFacebook || loggedInFromGoogle){
    console.log("User logged in");
}