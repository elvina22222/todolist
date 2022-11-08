const arrowdown = document.querySelector('.arrowDown');
arrowdown.addEventListener('mouseover', (event) => {
    event.target.style.color = 'black';
});
arrowdown.addEventListener('mouseout', (event) => {
    event.target.style.color = '#C4C4C4';
});

const krest= document.querySelector('.krestik');

krest.addEventListener('mouseover', (event) => {
    event.target.style.color = '#833AE0';
});
krest.addEventListener('mouseout', (event) => {
    event.target.style.color = 'white';
});
