export const toggleMode = document.getElementById('toggle-mode');

export function handlerMode(event) {
    const html = document.documentElement.classList.toggle('light-mode');
    const mode = html ? 'dark' : 'light';

    event.currentTarget.querySelector('span').textContent = `${mode} ativado!`;
}