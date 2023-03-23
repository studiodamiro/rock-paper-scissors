export function changeCursor(on) {
    let element = document.querySelector('.round');
    on ? (element.style.cursor = 'pointer') : (element.style.cursor = 'default');
}
