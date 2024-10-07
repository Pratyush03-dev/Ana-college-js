// let  nums = [2,3,4,5,3,4,7,1,29];

// let result = nums.reduce((max,el) => {
//     if (el > max) {
//         return el;
//     } else {
//         return max;
//     }
// })

// let nums = [10,20,30,40,45];

// let ans = nums.every((el) => el % 10 == 0);
// console.log(ans);


// let nums = [34,67,89,1,56];

// let min = nums.reduce((min,el) => {
//     if (el > min){
//         return min;
//     } else {
//         return el;
//     }
// });
// console.log(min);

// let nums = [1,2,3,4,5];
// const square = nums.map((num) => num * num);
// console.log(square);

// let sum = square.reduce((acc,cur) => acc + cur);

// let avg = sum / nums.length;
// console.log(avg);

// let nums = [1,2,3,4,5];
// const newNums = nums.map((num) => num+5);
// console.log(newNums);

// let strings = ["adam", "bob", "catlyn", "donald", "eve"];
// console.log(strings.map((string) => string.toUpperCase()));



// const doubleAndReturnArgs = (arr, ...args) => [
//     ...arr,
//     ...args.map((v) => v * 2),
// ];

// doubleAndReturnArgs ([1,2,3], 4, 4);
// doubleAndReturnArgs ([2], 10, 4);

const mergeObjects =(obj1 , obj2) => ({...obj1,...obj2});mergeObjects({a: 1 , b: 2}, { c: 3, d: 4});

console.log(mergeObjects);