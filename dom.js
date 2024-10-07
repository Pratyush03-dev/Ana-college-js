// console.dir(document.querySelector("h1"));

// console.dir(document.querySelector("#description"));

// console.dir(document.querySelectorAll("div a"));

// let links = document.querySelectorAll(".box a");

// for(link of links) {
//     link.style.color = "purple";
// }

// for (let i=0; i< links.length; i++) {
//     links[i].style.color = "yellow";
// }


// let para1 = document.createElement('p');
// para1.innerText = "Hey I'm red!";
// document.querySelector("body").append(para1);

// para1.classList.add('red');


// let para2 = document.createElement('h3');
// para2.innerText = "I'm a blue h3!";
// document.querySelector("body").append(para2);

// para2.classList.add('blue');


// let div = document.createElement("div");
// let h1 = document.createElement("h1");
// let para3 = document.createElement("p");

// h1.innerText = "I'm in a div";
// para3.innerText = "ME TOO!";

// div.append(h1);
// div.append(para2);

// div.classList.add("box");
// document.querySelector("body").append(div);


let input = document.createElement("input");
let button = document.createElement("button");
button.innerText = "Click Me";

document.querySelector("body").append(input);
document.querySelector("body").append(button);

button.setAttribute("id", "btn");
input.setAttribute("placeholder", "usernames");


let btn = document.querySelector("#btn");
btn.classList.add("changebtn");

let h1 = document.createElement("h1");
h1.innerText = "DOM Practice";
document.querySelector("body").append(h1);
h1.classList.add("changeh1");

let para = document.createElement("p");
para.innerHTML = "Apna college <b> Delta </b> Practice";
document.querySelector("body").append(para);