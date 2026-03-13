let myName = "Mukul     "

// console.log(myName.trim().length);
// console.log(myName.truelength);// there is nor method of truelength

// Object.prototype is the main parent of all objects in JavaScript.

// 👉 If you add something to Object.prototype,
// then every object (including arrays, functions, etc.) can use it.

// JavaScript objects inherit properties and methods from Object.prototype.

let myHeroes = ["Thor", "spiderman"]

let heroPower = {
    Thor: "hammer",
    spiderman: "web shooter",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.Mukul = function() {
    console.log(`Mukul is present in all objects`);
}

// heroPower.Mukul(); //Mukul is present in all objects
// myHeroes.Mukul(); // Mukul is present in all objects(both have access of Mukul)


// Note: agar power object ko mil jati hai to by defalut wo sab me use hoti hai {function, Array, String}
// because sab obj se hi pass hota hai

// eg: gives power only arr 
 
Array.prototype.vaid = function() {
    console.log("only arrays has power");
}

// myHeroes.vaid(); // => only arrays has power
// heroPower.vaid();// error=>  heroPower.vaid is not a function(means heroPower has not access of vaid)

// prototype inheritance

const Teacher = {
    Erp : true
}

const students = {
    name: "Mukul",
    email: "mukul@gmail.com",
    __proto__: Teacher
}

const TeachingSupport = {
    isAvailable: false
}

// students.__proto__ = TeachingSupport; // students inherit Teachingsupport
// console.log(students.isAvailable); // false
// console.log(students.Erp); //true because students inherit properties of Teacher using __proto__

// modern syntax

Object.setPrototypeOf(TeachingSupport, students); // TeachingSupport inherit students
console.log(TeachingSupport.email); //mukul@gmail.com

let anothername = "MukulVaid  ";

String.prototype.truelength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anothername.truelength();
"Mukul   ".truelength();
"vaid  ".truelength();