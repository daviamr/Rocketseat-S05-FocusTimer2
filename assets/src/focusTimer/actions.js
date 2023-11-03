import * as el from './elements.js';
import * as timer from './timer.js';
import { state } from './state.js';

const minutes = state.minutes;
const seconds = state.seconds;


export function start() {
    state.isRunning = !state.isRunning;
    if (!state.isRunning) return;
    toggleRunning();

    state.countdownId = setInterval(timer.countdown, 1000);
}

export function pause() {
    if (!state.isRunning) return;
    state.isRunning = !state.isRunning;
    toggleRunning();

    clearInterval(state.countdownId);
}

export function reset() {
    state.isRunning = false;
    if (document.documentElement.classList.toggle('running')) toggleRunning();

    clearInterval(state.countdownId);
    timeDisplay(minutes, seconds);
}

export function set() {
    if (state.minutes >= 60) return;

    state.minutes += 5;
    timeDisplay(state.minutes, el.seconds.textContent);
}

export function unset() {
    if (state.minutes <= 0) return;

    state.minutes = state.minutes - 5;
    timeDisplay(state.minutes, el.seconds.textContent);
}

//utils
function toggleRunning() {
    return document.documentElement.classList.toggle('running');
}

export function timeDisplay(minutes, seconds) {
    el.minutes.innerText = minutes.toString().padStart(2, '0');
    el.seconds.innerText = seconds.toString().padStart(2, '0');
}