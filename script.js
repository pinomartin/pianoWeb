const WHITE_KEYS = ['a', 's', 'd', 'f', 'g', 'h', 'j']
const BLACK_KEYS = ['q', 'w', 'e', 'r', 't']

const keys = document.querySelectorAll('.key');
const whiteKeys = document.querySelectorAll('.key.white')
const blackKeys = document.querySelectorAll('.key.black')

keys.forEach(key => {
    key.addEventListener('click', () => playNote(key))
});

document.addEventListener('keydown', e => {
    /*Stops sound if holds keys continuosly*/
    if (e.repeat) return
    const key = e.key
    const whitekeyIndex = WHITE_KEYS.indexOf(key)
    const blackkeyIndex = BLACK_KEYS.indexOf(key)

    if (whitekeyIndex > -1) playNote(whiteKeys[whitekeyIndex]);
    if (blackkeyIndex > -1) playNote(blackKeys[blackkeyIndex]);
})

function playNote(key) {
    const noteAudio = document.getElementById(key.dataset.note)
        /*reproduces audio on click no matter audio duration*/
    noteAudio.currentTime = 0
    noteAudio.play();
    /*change color onclick*/
    key.classList.add('active');
    noteAudio.addEventListener('ended', () => {
        key.classList.remove('active')
    })
}