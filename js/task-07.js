const fontSizeControl = document.querySelector('#font-size-control')
const wordSize = document.querySelector('#text')

fontSizeControl.addEventListener('input', onInput)

function onInput(evt) {
    const rangeEvent = evt.currentTarget.value;
        wordSize.style.fontSize = rangeEvent + "px";
    
}
