// let name = prompt ("Please enter your name");
// let age = prompt ("Please enter your age");
// alert (`${name} is ${age} years old`);


// let str ="bpples";
// if ( (str[0]== 'a' || str[0]== 'A')  && (str.length > 5)) {
//     console.log("Golden string");
// } else {
//     console.log(" Not a Golden string");
// }

// let num1 = 329;
// let num2 = 478520;

// if ((num1 % 10) == (num2 % 10)){
//     console.log("Numbers have the same last digit which is", num1 % 10);
// } else {
//     console.log("Numbers don't have the same last digit");
// }


// let msg = "help!";
// console.log(msg.trim().toUpperCase());

// let start = ["january","july","march","august"];

// let lang = ["c","c++","html","javascript","python","java","c#"];

// let game = [["x","null","0"], ["null","x","null"], ["0","null","x"]];


// let first = [7,9,0,2,8];
// let n =5;

// let ans = first.slice(0,n);
// console.log(ans);


// let first = [7,9,0,2,8];
//  let n =3;

//  let ans = first.slice(-n);
//  console.log(ans);


// let str = prompt("Please Enter a string");

// if(str.length==0){
//     console.log("String is empty");
// }else{
//     console.log("String is not empty");
// }


// let str = "APNACOllege";
// let idx = 8;

// if(str[idx] == str[idx].toUpperCase()) {
//     console.log("character is uppercase");
// }else{
//     console.log("character is lowercase");
// }


// let str = prompt("Please enter a string");
// console.log(`original string =${str}`);
// console.log(`string without spaces = ${str.trim()}`);


// let arr=["hello",'a',23,64,99,-6];
// let item=23;
// if(arr.indexOf(item)!=-1){
// console.log("Element exists in array");
// } else {
//     console.log("Element doesnot exist in array");
// }    

// for (let i=2;i<=10;i++){
//     if(i%2==0){
//         console.log("num=",i);
//     }
// }

// for(let i=1;i<=10;i++){
//       k=5*i;{
//         console.log(k);
//       }

      
// }

// const favMovie = "avatar";

// let guess = prompt("Guess my favourite movie");

// while((guess != favMovie) && (guess != "quit")) {
//     guess = prompt("wrong guess. please try again");

// }
// if(guess==favMovie){
//     console.log("Congratulations");
// }

// let arr = [1,2,3,4,5,6,2,3];
// let num = 3;

// for (let i=0;i<arr.length;i++) {
//     if(arr[i] == num) {
//         arr.splice(i,1);
//     }
// }
// console.log(arr);

// let number = 2871562;
// let count = 0;

// let copy = number;

// while(copy>0) {
//     count++;
//     copy = Math.floor(copy/10);
// }
// console.log(count);

// let number = 287152;
// let sum = 0;

// let copy = number;
// while(copy > 0){
//     digit = copy % 10;
//     sum = sum + digit;
//     copy = Math.floor(copy/10);
// }
// console.log(sum);


// let n = 6;
// let factorial = 1;

// for(let i=1;i<=n;i++){
//     factorial=factorial*i;
// }
// console.log(`factorial of ${n} is ${factorial}`);

// let arr = [3,7,8,23,1,780];
// let largest = 0;

// for(i=0;i<arr.length;i++){
//     if(largest < arr[i]){
//         largest = arr[i];
//     }
// }
// console.log(largest);

// let dice = Math.floor(Math.random() * 6) + 1;
// console.log(dice);

// const car = {
//     name: "Maruti Suzuki",
//     model: "Maruti Suzuki Dzire",
//     color: "White"
// };
// console.log(car.name);

const person = {
    name: "Pro",
    age: 22,
    city: "Udala"
}
