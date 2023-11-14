// If an li element is clicked, toggle the class "done" on the <li>
const list = document.querySelector('ul');
list.addEventListener('click', (e) => {
  if (e.target.tagName === 'LI') {
    e.target.className = 'done'
  }
})
// If a delete link is clicked, delete the li element / remove from the DOM
list.addEventListener('click', (e) => {
  if (e.target.className === 'delete') {
    list.removeChild(e.target.parentElement)
    
  }
  e.stopPropagation();
})
// If an 'Add' link is clicked, adds the item as a new list item with
// addListItem function has been started to help you get going!
// Make sure to add an event listener(s) to your new <li> (if needed)
const addListItem = function(e) {
  e.preventDefault();
  const input = document.getElementsByTagName('input')[0];
  const text = input.value; // use this text to create a new <li>

  const newLI = document.createElement('li');
  const newSpan = document.createElement('span');
  const newAnchor = document.createElement('a');

  newSpan.innerText = text;
  newLI.appendChild(newSpan);
  newAnchor.className = 'delete';
  newAnchor.innerText = 'Delete'
  newLI.appendChild(newAnchor);

  list.appendChild(newLI);

  // Finish function here
};
const main = document.querySelector('main');
main.addEventListener('click', (e) => {
  if (e.target.className === 'add-item') {
    addListItem(e);
  }
  console.log(e.target.className)
})
