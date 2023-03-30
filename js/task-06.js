const inputText = document.querySelector('#validation-input')
inputText.addEventListener('blur', onInput)


const minLengthText = inputText.getAttribute("data-length")


function onInput(evt) {
    const textInInput = evt.currentTarget.value.trim();
    if (textInInput.length >= minLengthText) {
        inputText.classList.remove("invalid");
        inputText.classList.add("valid");
    }if (textInInput.length < minLengthText) {
        inputText.classList.remove("valid");
        inputText.classList.add("invalid");
         
    }
   
}