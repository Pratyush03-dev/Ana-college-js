// let arr = [8,9,5,7,3,16,12,10,11];
// let num = 8;

// function getElements(arr, num) {
//     for(let i=0; i<arr.length; i++) {
//         if(num < arr[i]) {
//             console.log(arr[i]);
//         }
//     }

// }
// getElements(arr, num);


// let country = ["Australia", "germany", "United states of America"];

// function longestName(country) {
//     let ansIdx = 0;
//     for(let i=0; i<country.length;i++){
//         let ansLen = country[ansIdx].length;
//         let curLen = country[i].length;
//         if(curLen > ansLen) {
//             ansIdx = i;
//         }
//     }
//     return country[ansIdx];
// }
// longestName(country);



// let start = 300;
// let end = 400;

// function generateRandom(start, end) {
//     let diff = end - start;
//     console.log(Math.floor(Math.random() * diff) + start);
// }
// generateRandom(start, end);

// let str = "pratyushkumarbariko";

// function countvowels(str) {
//     let count = 0;
//     for(let i=0; i<str.length;i++) {
//         if(
//             str.charAt(i) == "a" ||
//             str.charAt(i) == "e" ||
//             str.charAt(i) == "i" ||
//             str.charAt(i) == "o" ||
//             str.charAt(i) == "u" 
//         ) {
//             count++;
//         }
//     }
//     console.log(count);
// }
// countvowels(str);


let str = "abcdabcdefgggh";

function getUnique(str) {
    let ans = "";

    for(let i=0; i< str.length; i++) {
        let currchar = str[i];
        if (ans.indexOf(currchar) == -1) {

            ans += currchar;
        }
    }
    return ans;
}

getUnique(str);