const decremenBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const counter = document.querySelector('#value');


let counterValue = 0;

decremenBtn.addEventListener('click', clickDown);
incrementBtn.addEventListener('click', clickUp);

function clickDown(evt) {
    counterValue -= 1;
    counter.textContent = counterValue
}  

function clickUp(evt) {
    counterValue += 1;
    counter.textContent = counterValue
}  