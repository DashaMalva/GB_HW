'use strict';

const player = document.querySelector('.player'); 
const videoEl = player.querySelector('.video');

const playBtn = player.querySelector('.playBtn');
const pauseBtn = player.querySelector('.pauseBtn');
const stopBtn = player.querySelector('.stopBtn');

const volume = player.querySelector('#controls__volume');

const timing = player.querySelector('#timing');
const currentTime = player.querySelector('.current_time');


playBtn.addEventListener('click', () => {
    videoEl.play();
})

pauseBtn.addEventListener('click', () => {
    videoEl.pause();
})

stopBtn.addEventListener('click', () => {
    videoEl.pause();
    videoEl.currentTime = 0;
})

videoEl.addEventListener('timeupdate', (e) => {
    currentTime.innerText = videoEl.currentTime;
    timing.value = videoEl.currentTime / videoEl.duration * 100;
})

volume.addEventListener('input', (e) => {
    videoEl.volume = volume.value;
})

timing.addEventListener('input', (e) => {
    videoEl.currentTime = timing.value / 100 * videoEl.duration;
})
