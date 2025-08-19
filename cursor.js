// cursor.js

document.addEventListener('DOMContentLoaded', () => {
    document.body.addEventListener('click', function(e) {
        let clickEffect = document.createElement('div');
        clickEffect.className = 'click-effect';
        clickEffect.style.left = `${e.pageX}px`;
        clickEffect.style.top = `${e.pageY}px`;
        document.body.appendChild(clickEffect);
        setTimeout(() => {
            clickEffect.remove();
        }, 600);
    });
});
