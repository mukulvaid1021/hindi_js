// while loop

let index = 0;
// while(index <= 10){
//     console.log(`VAlue of index ${index}`);
//     index = index + 2;   
// }

let heroes = ['ironman', 'spiderman', 'batman', 'superman', 'captainamerica'];

let arr = 0;

while(arr < heroes.length){
    console.log(`My hero ${heroes[arr]}`);// pehla condn fir print
    arr = arr + 1;
}

// do while loop

let score = 11;

do {
    console.log(`Score is ${score}`);// pehla print fir condn check
    score++;
} while (score <= 10);