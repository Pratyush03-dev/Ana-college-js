// function printPoem() {
//     console.log("Twinkle Twinkle, little star");
//     console.log("how I wonder what you are");
// }

// printPoem();

// function rollDice() {
//     let random = Math.floor(Math.random() *6) + 1;
//     console.log(random);
// }

// rollDice();

// function avg(a,b,c) {
//      console.log((a+b+c) / 3);
// }

// avg(5,6,10);

// function mulTable(a) {
//     for(i=1; i<=10;i++){
//         let A = a*i;
//         console.log(A);
//     }

// }
// mulTable(7);

// function sum(n) {
//    let Sum = 0;
//     for(i=1; i<=n; i++){
//         Sum = Sum + i; 
       
//     }
//     return(Sum);

// }

// let str = ["hi", "hello", "bye", "!"];

// function concat(str) {
//     let Concat = "";
//     for(let i=0; i<str.length;i++){
//         Concat = Concat + str[i];
        
//     }
//     return Concat;
    
// }


// let greet = "hello"; //global scope

// function changeGreet() {
//     let greet = "namaste"; //function scope
//     console.log(greet);

//     function innerGreet() {
//         console.log(greet); //lexical scope
        
//     }
//     innerGreet();
// }

// console.log(greet);
// changeGreet();

// console.log("Hi there");

// setTimeout( () => {
//     console.log("Apna College");
// }, 4000);

// console.log("Welcome to");
// console.log("Welcome to");

// console.log("Welcome to");


// const square = (n) => n*n;

// let id = setInterval ( () =>{
//     console.log("Hello World");
// }, 2000);

// setTimeout( () =>{
//      clearInterval(id);
//      console.log("clear interval ran");
// }, 10000);



// let num = 4;
// const isEven = (num) => {
//     num%2 == 0;
//     console.log(`${num} is even`);
// }


let arr = [45,48,34,48,49];
const arrayAverage = (arr) => {
    let total = 0;
    for(let num of arr) {
        total+=num;
    }
    return total / arr.length;
    
};