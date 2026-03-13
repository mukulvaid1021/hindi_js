const user = {
    username: "Mukul vaid",
    logincnt: 8,
    signedIn: true,

    getUserDetails: function() {
        console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());

// constructor function gives new instance every time
// new is used to create a new object from a constructor function or class.
function User(username, loginCount, isLoggedIn){
    this.username = username,
    this.loginCount = loginCount,
    this.isLoggedIn = isLoggedIn

    return this // iska bina bhi return hota hai define implicitly
}

const userOne = new User("Mukul", 23, true);
const userTwo = new User("zaid", 12, false); //without new keywords it overrides the userone jab me userone ko console krta hu
console.log(userOne);// with new keyword it makes seprate copies
console.log(userTwo);