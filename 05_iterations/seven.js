// reduce

const arr = [1, 2, 3];

// const newNum = arr.reduce(function (acc, currval) {
//     console.log(`acc value is ${acc} and currvalue is ${currval}`);
//     return acc + currval;
// }, 0)

const myNum = arr.reduce( (acc, currval) => {return acc+currval},0)
console.log(myNum);