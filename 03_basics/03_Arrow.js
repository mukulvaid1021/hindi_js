const user = {
    username : "Mukul",
    price : 999,

    wlcomeMessage: function(){
        console.log(`${this.username}, is Logged In`);
        // console.log(this);
    }
}

// user.wlcomeMessage;
// user.wlcomeMessage();
// console.log(user);
console.log(this);// => {} because global is empty but browser ke andar ye kuch values deta hai
//  kyo ki js ka engine browser ke andar hi tha but ab like node, deno ye sab bahar hai or global context empty hai thats why it retirns empty

function coffee() {
    let usernames = "Aryan";//=>undefined ye object me hi kam krta hai fun ke andar nahi 
    console.log(this.usernames);
}

// coffee(); //fun ke andar ye kuch values deta hai 

const chai = function(){
    let name = "Mukul Vaid"
    console.log(this.name);
}

// chai(); // it give same result

const chais = () => {
    let name = "Mukul Vaid"
    console.log(this);
}
// chais(); // it give same result

// +++++++++++++++++ Arrow functions +++++++++++++++++++++
//synatax -> () => {}
// explicit(return)
const addTwo  = (num1 , num2) => {
    return num1 + num2; //=> 14 explicit(return)
}

//implicit (=>)
const addTwousingArrow  = (num1 , num2) => (num1 + num2)
console.log(addTwo(5,9)); // using arrow same o/p 14 
//Note : if use {} [return] is mandatory and use () [=>] is mandatory

// agar obj return krna chahata ho

const cup = (num1, num3) => ({username : "kishu"})
console.log(cup(2,6));