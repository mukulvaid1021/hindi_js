// ES6

// class User {
//     constructor(username, email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password
//     }

//     encryptPassword() { 
//         return `${this.password}abc`
//     }

//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const chai = new User("Mukul", "abc@mail.com", "123")
// console.log(chai.changeUsername());
// console.log(chai);
// console.log(chai.encryptPassword());

// behind the scenes

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`;
}

User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`;
}

const Tea = new User("tea", "tea@mail.com", "1231");
console.log(Tea.encryptPassword());
console.log(Tea.changeUsername());