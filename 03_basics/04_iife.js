// Immediately Invoked Function Expressions (IIFE)

// function iffe(){
//     console.log("Looged In");
// }
(function iffe(){
    // named iife hai 
    console.log("Looged In");
})(); // Looged In because fun is wrapped in ()

// () if use direct iy gives error
// iffe(); // Looged In
// agar immediately use krna hai to uske liye pura fun ko wrap kr do () and then execution ke liye direct is use lr sakta hai()

//Note: agar hume immediately fun ko use krna hai to global scope ke pollution lo remove krna hoga like variables (iife) jo problem create krte hai
(
    ()=> {
        //unmaed iife hai
        console.log(`DB connected`);
    }
)();

(
    (name) => {
        //unmaed iife hai
        console.log(`DB connected ${name}`);
    }
) ("Rahul")