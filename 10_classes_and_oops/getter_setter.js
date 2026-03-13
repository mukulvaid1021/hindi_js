class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }
    get email(){
        return this._email.toUpperCase();
    }
    set email(value){
        this._email = value
    }
    get password(){
        return `${this._password}Mukul`
    }

    set password(value){
        this._password = value
    }
} 

const Mk = new User("Mk@mail.com", "abcd")
console.log(Mk.password);
console.log(Mk.email);