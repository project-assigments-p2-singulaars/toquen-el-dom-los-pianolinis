const blackKyes =['w','e', 'y','u','i'];
const whiteKeys = ['a','s', 'd','f','g','h','j','k'];

const notes = document.querySelectorAll('.note');
const white_key = document.querySelectorAll('.whitekey');
const black_key = document.querySelectorAll('.blackkey');
notes.forEach(note =>{
    note.addEventListener('click', ()=> playNote(note))
});

document.addEventListener('keydown', (e)=>{
    if(e.repeat) return
    const key = e.key;
    const whiteKeyIndex = whiteKeys.indexOf(key);
    const blackKyesIndex = blackKyes.indexOf(key);

    if (whiteKeyIndex > -1)playNote(white_key[whiteKeyIndex]);
    if (blackKyesIndex > -1)playNote(black_key[blackKyesIndex]);
     
})

function playNote(key){
    const audio = new Audio('assets/sounds/Do.mp3');
    audio.currentTime = 0;
    audio.play();
    key.classList.add('active')
    audio.addEventListener('ended',() =>{
        key.classList.remove('active')
    })
}