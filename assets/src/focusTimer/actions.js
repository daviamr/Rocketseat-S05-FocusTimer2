import * as el from './elements.js';
import * as timer from './timer.js';
import { state } from './state.js';

const minutes = state.minutes;
const seconds = state.seconds;

//
export function timeDisplay(minutes, seconds) {
    el.minutes.innerText = minutes.toString().padStart(2, '0');
    el.seconds.innerText = seconds.toString().padStart(2, '0');
}

export function start() {
    state.isRunning = !state.isRunning;
    if (!state.isRunning) return;

    document.documentElement.classList.toggle('running');

    el.seconds.innerText = `59`;
    state.countdownId = setInterval(timer.countdown, 1000);
}

function reset() {
    clearInterval(state.countdownId);
    timeDisplay(minutes, seconds);
}

//controls event
el.controls.forEach((el) => {
    el.addEventListener('click', () => {

        el.classList[1] === 'play' ? start() : null;
        if (el.classList[1] === 'more') {
            state.minutes += 5;
            timeDisplay(state.minutes, state.seconds);
        }

        if (el.classList[1] === 'stop') reset();

        if (el.classList[1] === 'less') {
            state.minutes = state.minutes - 5;
            timeDisplay(state.minutes, state.seconds);
        }

    })
})