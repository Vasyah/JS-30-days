let inputs = document.querySelectorAll('.form input');

console.log(inputs);

console.log(inputs[0].value);


function getVal() {
    let suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    console.log(this.name);
    console.log(suffix);
}
inputs.forEach(e => {
    e.addEventListener('change', getVal);
    e.addEventListener('mousemove', getVal);
});


