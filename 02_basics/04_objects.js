// singelton
// const tinderUsers = new Object()
// console.log(tinderUsers);//=> {}

// non singelton
// const tinderUsers = {}
// console.log(tinderUsers) //=> {}

    // nested objects
    const regularUsers = {
        fullName : {
            userFullname : {
                firstName : "Mukul",
                lastName : "vaid"
            }
        }
    } 

    // console.log(regularUsers.fullName); //{ userFullname: { firstName: 'Mukul', lastName: 'vaid' } }
    
    // console.log(regularUsers.fullName.userFullname);// { firstName: 'Mukul', lastName: 'vaid' }

    const obj1 = {1 : "a", 2 : "b"};
    const obj2 = {3 : "c", 4 : "d"};

    // const obj3 = (obj1, obj2); // wrong

    // const obj3 = Object.assign({}, obj1, obj2); // right
     const obj3 = {...obj1, ...obj2};
    // console.log(obj3);

    const instaUsers = {
        name : "Mukul",
        age : 19,
        isLoggedIn : true,
        location :" Ghaziabad"
    }
    // console.log(Object.keys(instaUsers));
    // console.log(Object.values(instaUsers));
    // console.log(Object.entries(instaUsers));

const course = {
    courseName : "js in hindi",
    price : "999",
    courseInstructor : "Mukul"
}

// ways to acces any values
// console.log(course.courseInstructor);

const{courseInstructor} = course; //another way to access value
console.log(courseInstructor);

const{courseInstructor : Iname} = course;
console.log(Iname); 