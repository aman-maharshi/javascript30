window.addEventListener('keydown', (e) => {
    // console.log(e.keyCode);
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const button = document.querySelector(`div[data-key="${e.keyCode}"]`);
   
    button.classList.add('playing');
    setTimeout(() => {
        button.classList.remove('playing');
        audio.play();
    }, 200)
});

window.addEventListener('click', (e) => {
    // console.log(e.path[0].classList);
    if(e.path[0].classList.contains('key')) {
        const code = e.path[0].getAttribute('data-key');
        const audio = document.querySelector(`audio[data-key="${code}"]`);

        e.path[0].classList.add('playing');
        setTimeout(() => {
            e.path[0].classList.remove('playing');
            audio.play();
        }, 200)
    }
})