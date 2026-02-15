// for of 
// ["","",""]
// [{},{},{}] obj ko bhi arr ke andr se access kr sakta hai using for of loop

const arr = [1,2,3,4,5];

for(const num of arr){
    // console.log(num);// without any condn or incriment directly use
    // isko string obj kisi pe bhi lga sakta hai
}

const greetings = "Hello world!";
for (const greet of greetings) {
    if(greet == " ")
        continue;
    // console.log(`Each char is ${greet}`);
}

// Maps 
// ye unique key value pairs ko print krata hai or value order me rehta hai

const map = new Map();
map.set("IN", "India")
map.set("USA", "United states of America")
map.set("FR", "France")

// console.log(map);//=>Map(3) {'IN' => 'India','USA' => 'United states of America', 'FR' => 'France'}

// destructring of map
for (const [key,value] of map){
    console.log(key, ':-', value);
}

// objects

// const myObj = {
//     game1 : 'cricket',
//     game2 : 'football'
// }

// for(const key of myObj){
//     // console.log(key);//=> error  : myObj is not iterable
//     // because obj ko is tarike se iterate nahi karata hai
      
// }

const myObject = {
    js : "javascript",
    cpp : "C++",
    rb : "ruby",
    swift : "swift by apple"
}

for(const key in myObject){
    console.log(`${key} shortcut is for ${myObject[key]}`); // obj => myObject[key] aisa print krata hai
}

//Array
const programming = ['js', 'cpp', 'rb', 'swift'];
for (const key in programming){
    // console.log(key);// => 0123 by default numbers hi keys hoti hai
     // obj me apni marji se keys dal sakta hai
    console.log(programming[key]);// js cpp rb swift
}