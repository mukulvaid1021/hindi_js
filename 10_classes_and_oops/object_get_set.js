const User = {
    _email: 'M@mc.com',
    _password: "abc",

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value;
    },

     get password(){
        return this._password.toUpperCase()
    },

    set password(value){
        this._password = value;
    }
}

const Tea = Object.create(User)
console.log(Tea.email);
console.log(Tea.password);