// get all elements
const d = document;
const video = d.querySelector('.viewer');
const player = d.querySelector('.player');
const progress = d.querySelector('.progress');
const progressBar = d.querySelector('.progress__filled');
const playButton = d.querySelector('.toggle');
const ranges = d.querySelectorAll('.player__slider');
const skipButtons = d.querySelectorAll('[data-skip');


// assign all listeners
video.addEventListener('click', togglePlay);
video.addEventListener('play', changePlayIcon);
video.addEventListener('pause', changePlayIcon);
video.addEventListener('timeupdate', changeProgress)

ranges.forEach(range => {
    range.addEventListener('change', handleRange);
    range.addEventListener('mousemove', handleRange)
});

playButton.addEventListener('click', togglePlay);
skipButtons.forEach(button => {
    button.addEventListener('click', skipTime)
});

let isMouseDown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => isMouseDown && scrub(e));
progress.addEventListener('mouseup', () => isMouseDown = false );
progress.addEventListener('mousedown', () => isMouseDown = true);



// declare all functions

function togglePlay() {
    let event = video.paused ? 'play' : 'pause';
    video[event]();
}

function changePlayIcon() {
    let playIcon = this.paused ? '►' : '❚ ❚';
    playButton.textContent = playIcon;
}

function handleRange() {
    video[this.name] = this.value;
}

function skipTime() {
    console.log(video.currentTime);
    video.currentTime += parseFloat(this.dataset.skip);
}

function changeProgress() {
    let percent = (this.currentTime / this.duration)*100;
    progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e){
    let curr = (e.offsetX / progress.offsetWidth) * video.duration; 
    console.log(curr);
    video.currentTime = curr;
}
