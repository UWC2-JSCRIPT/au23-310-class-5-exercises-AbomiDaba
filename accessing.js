// Change the text of the "Seattle Weather" header to "February 10 Weather Forecast, Seattle"
let h1 = document.getElementsByTagName('h1');
h1[0].innerText = 'February 10 Weather Forecast, Seattle';
// Change the styling of every element with class "sun" to set the color to "orange"
let sunClass = document.getElementsByClassName('sun');
for (element of sunClass) {
    element.style.color = 'orange'
}
// Change the class of the second <li> from to "sun" to "cloudy"
let secondList = document.querySelector('li.sun');
secondList.className = 'cloudy';