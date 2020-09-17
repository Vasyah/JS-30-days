const panels = document.querySelectorAll('.panel');

function toggleOpen(){
    this.classList.toggle('open');
}

function toggleActive(e){
    console.log(e.propertyName);
    // for cross-browser
    if(e.propertyName.includes('flex')){
        this.classList.toggle('open-active');
    }
}
panels.forEach(currentItem => {
    currentItem.addEventListener('click', toggleOpen)
});

panels.forEach(currentItem => {
    currentItem.addEventListener('transitionend', toggleActive)
});

