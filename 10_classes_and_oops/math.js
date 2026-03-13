const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

console.log(descripter); //{value: 3.141592653589793, writable: false, enumerable: false, configurable: false}

const chai = {
    name : "ginger chai",
    price : 450,
    isAvailable : true,
      orderchai : function(){
        console.log("chai is ready");
    }
}

// console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// define property
Object.defineProperty(chai, 'name', {
    writable: true,
    enumerable: true,
    configurable: true
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`);
    }
}