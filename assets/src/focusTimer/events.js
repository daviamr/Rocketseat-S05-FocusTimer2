import * as act from './actions.js';
import * as el from './elements.js';

el.controls.forEach((btn) => {
    btn.addEventListener('click', () => {

        if (btn.classList[1] === 'play') act.start();

        if (btn.classList[1] === 'pause') act.pause();

        if (btn.classList[1] === 'stop') act.reset();

        if (btn.classList[1] === 'more') act.set();

        if (btn.classList[1] === 'less') act.unset();

    })
})