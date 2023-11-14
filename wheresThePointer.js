// Attach one listener that will detect clicks on any of the <td>
// elements.  Should update that element's innerHTML to be the
// x, y coordinates of the mouse at the time of the click
const tBody = document.querySelector('tbody');
tBody.addEventListener('click', (e) => {
    const element = e.target;
    element.innerText = `X: ${e.clientX}\n Y: ${e.clientY}`;
})