const fontSizeControl = document.querySelector('#font-size-control')
const wordSize = document.querySelector('#text')

fontSizeControl.addEventListener('input', onInput)

function onInput(evt) {
        wordSize.style.fontSize = evt.currentTarget.value + "px";
    
}
