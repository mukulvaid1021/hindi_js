let marvel_heroes = ["spiderman", "ironman","captainAmerica"];
console.log(marvel_heroes);

let DC_heroes = ["superman", "batman","flash"];
console.log(DC_heroes);

marvel_heroes.push(DC_heroes);
console.log(marvel_heroes); //=>['spiderman','ironman','captainAmerica', ['superman', 'batman', 'flash' ]]

marvel_heroes.concat(DC_heroes);
console.log(marvel_heroes); // =>same output shows

const allheroes = marvel_heroes.concat(DC_heroes);
console.log(allheroes); //=> ['spiderman','ironman','captainAmerica','superman','batman','flash']

// use spread it gives same result like allheroes
// const all_hero = [...marvel_heroes, ...DC_heroes]

// flat =>convertin to 1 arr like nested arr

let nestArr = [1,2,3,[4,5,6],7,8,[9,10,11],12];
console.log(nestArr); //=> [ 1, 2, 3, [ 4, 5, 6 ], 7, 8, [ 9, 10, 11 ], 12 ]

console.log(nestArr.flat(Infinity));//=>[ 1,  2, 3, 4,  5, 6,  7, 8, 9, 10,11, 12]

console.log(Array.isArray("Mukul")); //=>false because it si not arry
console.log(Array.from("Mukul"));//=> [ 'M', 'u', 'k', 'u', 'l' ]