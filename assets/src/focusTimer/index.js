import * as el from './elements.js';
import * as act from './actions.js';
import { state } from './state.js';
import { timeDisplay } from './actions.js';

timeDisplay(state.minutes, state.seconds);

console.log(el.controls)
el.controls.forEach((el, i) => {
    el.addEventListener('click', () => {
        console.log(el, i)
    })
})