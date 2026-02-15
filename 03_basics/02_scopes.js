// scopes
let a = 800 //global scope
if (true) {
    let a = 10
    const b = 20 
    var c = 30

    console.log("Inner block : ",a) //-> isko inner block ke andar access kr sakta hai bahar  se nahi
}
// console.log(a); // error
// console.log(b); // error
// console.log(c); // 30 because var is accesible from outside ths scope
// kyoki block scope ke andar jo hai vo bahar se access nahi ho sakta hai isliye var ko avoid krte hai [bahar(globalscope)] 

// console.log(a); //=>800

function one(){
    const username = "Mukul vaid"
    function two(){
        const website = " instagram"
        console.log(username+website); // mukulvaid instagram
    }

     //console.log(website); // error same condn

    two()
}
//console.log(username); // error because it is access outside the block scope
one()

if(true) {
    const Uname = "Harsh yadav"
    if(Uname === "Harsh yadav"){
        const identity = "Daku"
        console.log(Uname + identity);
    }
    // console.log(identity); // error acces outside the scope
}
// console.log(Uname); //error outside the scope

// +++++++++++++++++interseting++++++++++++++++++++

// console.log(addOne(4)); // -> 5 isko hm fun declaration se pehle or declaration ke baad bhi access kr sakta hai
function addOne(num){
    return num+1;
}

// console.log(addOne(4)); //=> 5

addTwo(9); // error acces before declaration

const addTwo = function(num1){
    return num1 + 1
}
// addTwo(9); //=>10
// jab hm fun ko kisi variable me store krta hai to usko declaration se pehle access nahi kr sakta 