// call back function
const coding = ['cpp', 'c', 'ruby', 'js', 'python'];

coding.forEach( function (values){
    // console.log(values);
})

coding.forEach( (val) => {//using arrow function
    // console.log(val);
})

function printMe(item){
    console.log(item);
}
coding.forEach(printMe);

coding.forEach((item, index, arr) =>{
    console.log(item, index, arr);
})

const myCoding = [
    {
        languageName : "javascript",
        languageFileName : "js"
    },

    {
       languageName : "c++",
        languageFileName : "cpp"
    },

    {
        languageName : "python",
        languageFileName : "py"
    }
]

myCoding.forEach((item) => {
    console.log(item.languageName);
})