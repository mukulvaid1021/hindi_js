const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const mynewNum = myNumbers.map( (nums)=> nums + 10)
// console.log(mynewNum);

// chaining : ek se zayda methods apply kr sakta hai ek hi ke andar

const chaining = myNumbers
.map( (no) => no * 10)
.map((newNum) => newNum + 100)
.filter( (nums)=> nums >= 150)

console.log(chaining);
