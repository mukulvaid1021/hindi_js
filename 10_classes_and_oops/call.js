function setUsername(username) {
    this.username = username
}

function createUser(username, email, password) {
    setUsername.call(this, username)// call + execution context .call and this its hold reference and use the internal this jab execution hat bhi jaye to 
    // setUsername(username)  it call but execution context ko hta diya
    this.email = email
    this.password = password
}

const chai = new createUser("Mukul", "abc@gmail.com", "1234")
console.log(chai);// createUser { email: 'abc@gmail.com', password: '1234' } name is missing, ye call nahi ho raha hai
// means call to ho raha hai but call hote hi execution context ko sath me hta de raha hai isliye uske andar ka kuch print nahi ho raha hai
