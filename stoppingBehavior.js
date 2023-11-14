// Do not change
document.getElementById('cat').addEventListener('click', () => {
  alert('meow!');
});

// When clicked, "More info" link should alert "Here's some info"
// instead of going to a new webpage
const aTag = document.getElementById('more-info');
aTag.addEventListener('click', (e) => {
  alert("Here's some info");
  e.preventDefault();
})
// When the bark button is clicked, should alert "Bow wow!"
// Should *not* alert "meow"
const dogButton = document.getElementById('dog');
dogButton.addEventListener('click', (e) => {
  alert('Bow wow');
  e.stopPropagation();
})