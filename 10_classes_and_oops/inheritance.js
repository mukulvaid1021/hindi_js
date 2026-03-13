class User {
    constructor(username) {
        this.username = username
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course wass added by ${this.username}`);
    }
}

const chai = new Teacher("Mukul", "abc@mail.com", "123")
chai.addCourse()//A new course wass added by Mukul
chai.logMe()//USERNAME is Mukul

const masalaChai = new User("Prakhar")
masalaChai.logMe()// USERNAME is Prakhar

console.log(chai instanceof Teacher); // true
console.log(chai instanceof User);// true