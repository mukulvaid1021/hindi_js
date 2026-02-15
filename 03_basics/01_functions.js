// what is function
// // function functionName() {
//   // syntax
// }

const { use } = require("react");

function Printname() {
    console.log("M");
    console.log("u");
    console.log("k");
    console.log("u");
    console.log("l");
}
// Printname();

function addTwonumbers(num1, num2){
    console.log(num1+num2); // console only prints not return toh fun kuch return nahi kr raha hai
}

const result = addTwonumbers(3,5);
// console.log("Add to num result is : ",result); //=>Add to num result is :  undefined {because it does not return anything}

function addTwonumbers(num1, num2){
    // let add = num1+num2 
    return num1+num2;     // console only prints not return toh fun kuch return nahi kr raha hai
}
const newResult = addTwonumbers(5,6);
// console.log("Add to num result is : ",newResult); 

function loginUsersmsg(username){
    return `${username} just logged in`
}
// console.log(loginUsersmsg("Mukul vaid"));

function loginpage(username){
    if(!username){
        console.log("pls enter username");
        return;
    }
    return `${username} is logged in`;
}

// console.log(loginpage());

// rest and spread operators

function calculatePrice(...num1){// when applying (...num1)so it is rest and spread means combine data in to 1 bundle like[100,200,300]
    return num1
}

console.log(calculatePrice(100, 200, 300)); //=>100

function calculatePrice2(val1, val2, ...num1){
    return num1
}
console.log(calculatePrice2(200,300,5000,400))// [ 5000, 400 ] because val1 = 200, val2 = 300 ne value le liya

const users = {
    username : "Mukul vaid",
    price : 44
}

function handleObjeccts(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

//handleObjeccts(users); // => username is Mukul vaid and price is 44
// Note : when change price to prices it give undefined because it does not checks
handleObjeccts({
    username : "mohit",
    price : 899 // hm direct bhi pass kr sakta hai
})

// other examples

const myArray = [100,300,500,700];

function returnSecondvalue(myArray){
    return myArray[1];
}
// console.log(returnSecondvalue(myArray));
console.log(returnSecondvalue([200,300,400,500,600])) //use object direct

const mydetails = {
    name : "Mukul vaid",
    age : 28,
    address : "Ghaziabad",
    education : "b.tech"
}

function detailsHandler(mydetails){
    console.log(`Hi my name is ${mydetails.name} and Iam ${mydetails.age} yr old from ${mydetails.address} and I completed my ${mydetails.education}`)
}

detailsHandler(mydetails);
detailsHandler({
     name : "Mayank vaid",
    age : 18,
    address : "Loni",
    education : "b.com"
})