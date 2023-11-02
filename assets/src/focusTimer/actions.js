import * as el from './elements.js';
import { state } from './state.js';

//
export function timeDisplay(minutes, seconds) {
    el.minutes.innerText = minutes.toString().padStart(2, '0');
    el.seconds.innerText = seconds.toString().padStart(2, '0');
}