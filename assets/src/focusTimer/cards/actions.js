export const cards = document.querySelectorAll('#card');
export const video = document.getElementById('video');

const attr = video.getAttribute('src');

cards.forEach((e, i) => {
    e.addEventListener('click', () => {
        if (e.classList[1] === 'florest') {
            handlerVideo('florest', e);
        }
        if (e.classList[1] === 'rain') {
            handlerVideo('rain', e);
        }
        if (e.classList[1] === 'coffeeshop') {
            handlerVideo('coffeeshop', e);
        }
        if (e.classList[1] === 'fireplace') {
            handlerVideo('fireplace', e);
        }
    })
})

function handlerVideo(context, e) {

    switch (context) {
        case `${context}`:
            video.setAttribute('src', `./assets/video/${context}.mp4`);
            e.classList.add('focused-card');
            break;

        default:
            break;
    }
}