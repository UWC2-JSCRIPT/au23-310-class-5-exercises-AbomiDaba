// Create a new <a> element containing the text "Buy Now!" 
// with an id of "cta" after the last <p>
let aTag = document.createElement('a');
aTag.setAttribute('id', 'cta')
aTag.innerText = 'Buy Now!';
let main = document.querySelector('main');
main.appendChild(aTag);
// Access (read) the data-color attribute of the <img>,
let img = document.querySelector('img');
let color = img.dataset.color;
// log to the console
console.log(color);

// Update the third <li> item ("Turbocharged"), 
// set the class name to "highlight"
let thirdList = document.getElementsByTagName('li')[2];
thirdList.className = 'highlight';

// Remove (delete) the last paragraph
// (starts with "Available for purchase now…")
let p = document.querySelector('p');
main.removeChild(p);