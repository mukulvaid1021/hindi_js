// Array

const myArr = [0,1,2,3,4,5];
console.log(myArr[1]);

const heroes = ["shaktiman","naagraj"];
console.log(heroes[1]);

// Arrays methods

const myArr2 = [0,1,2,3,4,5];
console.log(myArr2);

myArr2.push(6);
myArr2.push(7);
myArr2.push(8);
myArr2.pop(); // everytime it pops last element
console.log(myArr2);
myArr2.unshift(9); // it push element in starting index
console.log(myArr2);
myArr2.shift(); // it removes starting element
console.log(myArr2);

console.log(myArr2.includes(9)) //it give bool result checks included or not
console.log(myArr2.indexOf(5)); //gives index

const joinedArr = myArr2.join();
console.log(myArr2);//=>[0,1,2,3,4,5,6,7]
console.log(joinedArr);//=> 0,1,2,3,4,5,6,7

//imp concepts slice, splice

//slice -> Array ka ek part nikaal ke NEW array deta hai Original array change nahi hota
// startIndex → include hota hai

// endIndex → include nahi hota

let arr = [10,20,30,40,50];
console.log(arr); // before slice

const applySlice = arr.slice(1,3);
console.log(applySlice);// =>[ 20, 30 ]
console.log(arr);//=> [ 10, 20, 30, 40, 50 ]

//splice => Original array ko direct change karta hai in any operation(Cut, add, delete)
// include last element
let arr2 = [10,20,30,40,50];
console.log(arr2);

const letsSplice = arr2.splice(1,4);
console.log(letsSplice); //=>[ 20, 30, 40, 50 ]
console.log(arr2);//=>[ 10 ]