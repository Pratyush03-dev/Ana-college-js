// let btns = document.querySelectorAll("button");
// for (btn of btns) {
// //     btn.onclick = sayHello;
// //     btn.onclick = sayName;
//     // btn.addEventListener("click", sayHello);
//     // btn.addEventListener("click", sayName);
//     btn.addEventListener("dblclick", function () {
//         console.log("You double clicked Me");
//     });

   
// } 

// // btn.onclick = function() {
// //     alert("button was clicked");
// // };

// function sayHello() {
//     alert("Hello");
// }

// function sayName() {
//     alert("Apna College");
// }

// // btn.onclick = sayHello;




// let btn = document.querySelector("button");

// btn.addEventListener("click", function () {
//     let h3 = document.querySelector("h3");
//     let randomColor = getRandomColor();
//     h3.innerText = randomColor;

//     let div = document.querySelector("div");
//     div.style.backgroundColor = randomColor;

//     console.log("color updated");
// });

// function getRandomColor() {
//     let red = Math.floor(Math.random() * 255);
//     let green = Math.floor(Math.random() * 255);
//     let blue = Math.floor(Math.random() * 255);

//     let color = `rgb(${red}, ${green}, ${blue})`;
//     return color;
// }

let btn = document.querySelector("button");

btn.addEventListener("click", function() {
    
     btn.style.backgroundColor= "red";
     console.log("Color is red");
});






// let form = document.querySelector("form");

// form.addEventListener("submit", function (event) {
//     event.preventDefault();

//     let inp = document.querySelector("input");
//     console.dir(inp);
//     console.log(inp.value);
// });