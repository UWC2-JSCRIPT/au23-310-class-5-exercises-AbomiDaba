// Given the <body> element as variable body,
// access the <main> node and log to the console.
const body = document.querySelector('body');
let main = body.firstElementChild;
console.log(main);
// Given the <ul> element as variable ul,
// access <body>  and log to the console.
const ul = document.querySelector('ul');
let parent = ul.parentElement;
console.log(parent);
// Given the <p> element as var p,
// access the 3rd <li>  and log to the console.
const p = document.querySelector('p');
let thirdListItem = p.previousElementSibling.firstElementChild.nextElementSibling;
console.log(thirdListItem);