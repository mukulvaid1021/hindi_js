// Promise = Async result ko future me handle karne ka structured system.
// Jab koi kaam future mein complete hoga (jaise API call, DB call, timer),
// Promise uska result safely handle karta hai — success ya failure.
// Jab kaam ho jaye, tab ye karo.
// Jab data ready ho, tab ye function chala dena.
// Result alag handle ho raha hai

// without async => function ko call krta hai jab ready na ho
// Result wahi handle karna padega callback ke andar.


// const PromiseOne = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         console.log("Async task is completed");
//         resolve()
//     },1000);
// });

// PromiseOne.then(()=>{
//     console.log("Promise consumed");
// });

// another way without require to store in variable

new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("Async2 is excuted");
        resolve();
    },1000)
}).then(()=>{
    console.log("Async2 resolved");
})

// how to receive data in Promise

const PromiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username : "Chai", email : 
            "chai@example.com"
        })
    },2000)
});

PromiseThree.then(function(user){
    console.log(user);
})

// chaining ke andar chaining like use more than 1 time then

const PromiseFour = new Promise(function(resolve, reject) {
    let error = false;
    setTimeout(function(){
        if(!error){
            resolve({username : 'Mukul', password : "123"});
        } else {
            reject('ERROR: Something went wrong');
        }
    },1000)
});

PromiseFour.then(function(user){
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("finally the work is done either resolve or reject"));

const PromiseFive = new Promise(function(resolve, reject){
    setTimeout(function (){
        let er = false;
        if(!er){
            resolve({username : "Javascript", Password : "245"})
        } else {
            reject('ERROR : JS went wrong');
        }
    },1000)
});

async function consumePromiseFive(){
    try {
        const response = await PromiseFive
        console.log(response);
    } catch (er) {
        console.log(er);
    }
}

consumePromiseFive();

// async function getAllUsers() {
//  try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');
//   const data = await response.json();
//   console.log(data);
//  } catch (error) {
//     console.log("E: ", error);
//  }
// }

// getAllUsers();

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error));

Answer

// 👉 fetch server ko HTTP request bhejta hai
// 👉 Promise return karta hai
// 👉 Response milne par resolve hota hai
// 👉 Error hone par reject hota hai