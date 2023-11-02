import * as el from './elements.js';
import { timeDisplay } from './actions.js';

export function countdown() {
    let minutes = parseInt(el.minutes.textContent);
    let seconds = parseInt(el.seconds.textContent);

    if (seconds === 0) {
        minutes--
        seconds = 59;
    }
    seconds--

    if (minutes < 0) return;

    timeDisplay(minutes, seconds);
}