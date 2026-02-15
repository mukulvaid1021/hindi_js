const coding = ["js", "ruby", "java", "python", "cpp"]

const values = coding.forEach((item)=>{
    console.log(item);
    return item;
})
console.log(values); // => js ruby java python cpp undefined
// for each loop does not return 

const myNums = [1,2,3,4,5,6,7,8,9,10]
// const newNums = myNums.filter( (num) => num > 4) //=> [ 5, 6, 7, 8, 9, 10 ]
const newNums = myNums.filter( (item) => {
    return item > 5 // without return [] with return [ 6, 7, 8, 9, 10 ]
})
//Note : if scope open krta hai to return jaruri hai agar nahi to direct likh sakta hai

console.log(newNums);

// example
const heroes = [
    {
        name : 'ironman',
        totalmovies : 5,
        DOB : 1963
    }, 

    {
        name : 'spiderman',
        totalmovies : 8,
        DOB : 2013
    }, 

    {
        name : 'captain america',
        totalmovies : 5,
        DOB : 2000
    },

    {
        name : 'thoe',
        totalmovies : 5,
        DOB : 2006
    }
]

const info = heroes.filter((vals) => vals.totalmovies === 5)
console.log(info);