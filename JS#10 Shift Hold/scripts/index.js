const inputs = document.querySelectorAll(".chkbx input[type='checkbox']");

let lastInput;
function displayCurrent(e){
    // должны зафиксировать нажатие на текущий инпут
    // если мы нажали клавишу шифт и текущее событие - переводит
    // чекбокс в cheked
    let inBetween = false;
    console.log(inBetween);
    // Нажат ли шифт и отмечен ли чекбокс
    if(e.shiftKey && this.checked){
        // 
        inputs.forEach(input => {
            // определяем элементы между двумя выделенными инпутами
            if(input === this || input === lastInput){
                // флаг того, что мы смотрим элементы между ключевыми
                // инпутами, как только определяем ключевой
                // то снимаем флаг
                inBetween = !inBetween;
                console.log(inBetween);
            }

            if(inBetween) {
                input.checked = true;
            }
        });
    }
    else if(e.shiftKey && !this.checked){
                // 
                inputs.forEach(input => {
                    // определяем элементы между двумя выделенными инпутами
                    if(input === this || input === lastInput){
                        // флаг того, что мы смотрим элементы между ключевыми
                        // инпутами, как только определяем ключевой
                        // то снимаем флаг
                        inBetween = !inBetween;
                        console.log(inBetween);
                    }
        
                    if(inBetween) {
                        input.checked = false;
                    }
                });
        
    }
    lastInput = this;
}
inputs.forEach(input => {
    input.addEventListener('click', displayCurrent);
});
