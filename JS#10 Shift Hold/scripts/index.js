// get all inputs
const inputs = document.querySelectorAll('.chkbx__item');

// listen click events for inputs
inputs.forEach(input => {
    input.addEventListener('click', shiftCheck)
});

let lastInput;
function shiftCheck(e){
    // check shift & checked of input
    if(e.shiftKey && this.checked){
        // inBetween flag
        let inBetween = false;
        // check input if it's inBetween is true 
        inputs.forEach(input => {
            if(input === this || input === lastInput){
                inBetween = !inBetween;
            }
            if(inBetween){
                input.checked = true;
            }
        });
    }
    lastInput = this;
}