export const cards = document.querySelectorAll('#card');
export const video = document.getElementById('video');
export const audio = {
    florest: new Audio('../assets/audio/florest.wav'),
    rain: new Audio('../assets/audio/rain.wav'),
    coffeeshop: new Audio('../assets/audio/coffeeshop.wav'),
    fireplace: new Audio('../assets/audio/fireplace.wav'),
    audioAtual: null
}

const html = document.documentElement;

export function handlerVideo(e, context, aud) {
    if (audio.audioAtual != null) {
        audio.audioAtual.pause();
        audio.audioAtual.currentTime = 0;
    }
    document.documentElement.classList.toggle('videoOn');

    for (let i = 0; i < html.classList.length; i++) {
        if (html.classList[i] === 'videoOn') {
            video.setAttribute('src', `./assets/video/${context}.mp4`)
            e.checked = true;
            aud.play();
            audio.audioAtual = aud;
            return
        }
    }
    e.checked = false;
}
