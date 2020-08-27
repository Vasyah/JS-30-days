const keysObj = {
    A: {
        sound: 'clap',
        dataKey: '65'
    },
    S: {
        sound: 'hithat',
        dataKey: '83'
    },
    D: {
        sound: 'kick',
        dataKey: '68'
    },
    F: {
        sound: 'openhat',
        dataKey: '70'
    },
    G: {
        sound: 'boom',
        dataKey: '71'
    },
    H: {
        sound: 'ride',
        dataKey: '72'
    },
    J: {
        sound: 'snare',
        dataKey: '74'
    },
    K: {
        sound: 'tom',
        dataKey: '75'
    },
    L: {
        sound: 'tink',
        dataKey: '76'
    },
}


const keys = document.querySelector('.keys');
for (let key in keysObj) {
    let div = document.createElement('div');
    div.setAttribute('data-key', `${keysObj[key].dataKey}`)
    div.classList.add('key');
    div.innerHTML = `<kbd>${key}</kbd><span>${keysObj[key].sound}</span>`;
    keys.append(div);
}

window.addEventListener('keydown', (e) => {
    const audio = document.querySelector(`audio[data-key = "${e.keyCode}"] `);
    const key = document.querySelector(`.key[data-key = "${e.keyCode}"] `);
    if (!audio) return; // stop the function from running all together
    audio.currentTime = 0;
    key.classList.add('playing');
    audio.play();
});

const keysEl = document.querySelectorAll('.key');

keysEl.forEach(key => key.addEventListener('transitionend', removeTransition));

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    console.log(this);
    this.classList.remove('playing');
}

console.log((1-129.38/134)*100);