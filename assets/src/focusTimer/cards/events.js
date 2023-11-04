import * as act from './actions.js';

act.cards.forEach((e) => {
    e.addEventListener('click', () => {
        if (e.classList[1] === 'florest') act.handlerVideo(e, 'florest', act.audio.florest);

        if (e.classList[1] === 'rain') act.handlerVideo(e, 'rain', act.audio.rain);

        if (e.classList[1] === 'coffeeshop') act.handlerVideo(e, 'coffeeshop', act.audio.coffeeshop);

        if (e.classList[1] === 'campfire') act.handlerVideo(e, 'fireplace', act.audio.fireplace);
    })
})