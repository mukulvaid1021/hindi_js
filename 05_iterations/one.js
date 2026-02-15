// for

for (let i = 0; i <= 10; i++) {
    const element = i;
    if(element == 5){
        console.log("5 is best Element")
    }
    console.log(element);
}

// nested forloop

for (let i = 1; i <= 5; i++) {
    const element = i;
    console.log(element);

    for (let j = 1; j <= 5; j++) {
        const element = j;
        console.log(i + "*" + j + "=" + i*j);
        // console.log(`Inner loop value ${i} and inner loop ${j}`);
    }
}
let myheroes = ['Ironman', 'thor', 'spiderman', 'captainAmerica'];
console.log(myheroes.length);
for (let i = 0; i < myheroes.length; i++) {
    const element = myheroes[i];
    console.log(element);
    
}

//break and continue
for (let index = 1; index <= 10; index++) {
    const element = index;
    if(element == 5){
        console.log("detected");
        break;
    }
    console.log(element);
    
}