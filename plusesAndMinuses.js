let count = document.getElementById('count');
let counter = 0;
const plusOrMinus = (e) => {
    if (e.target.id === 'plus') {
        counter++;
    } else if (e.target.id === 'minus') {
        counter--;
    }
    count.innerText = counter;
}
// When a user clicks the + element, the count should increase by 1 on screen.
let plusBotton = document.querySelector('button');
plusBotton.addEventListener('click', (e) => plusOrMinus(e))
// When a user clicks the – element, the count should decrease by 1 on screen.
let minusButton = document.getElementById('minus');
minusButton.addEventListener('click', (e) => plusOrMinus(e));