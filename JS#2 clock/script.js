'use strict'
let secondHand = document.querySelector('.second-hand');
let minuteHand = document.querySelector('.minute-hand');
let hourHand = document.querySelector('.hour-hand');

function setSecond() {
    let date = new Date();
    let seconds = date.getSeconds();
    let convertToDeg = (seconds / 60 * 360) + 90;
    secondHand.style.transform = `rotate(${convertToDeg}deg)`;
    console.log(convertToDeg);
}

function setMinute() {
    let date = new Date();
    let minutes = date.getMinutes();
    let convertToDeg = (minutes / 60 * 360) + 90;
    minuteHand.style.transform = `rotate(${convertToDeg}deg)`;
    console.log(convertToDeg);
}

function setHour() {
    let date = new Date();
    let hours = date.getHours();
    let convertToDeg = (hours / 60 * 360) + 90;
    hourHand.style.transform = `rotate(${convertToDeg}deg)`;
    console.log(convertToDeg);
}

setInterval(() => {
    setSecond(); setMinute(); setHour();
}, 1000);