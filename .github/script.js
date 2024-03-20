const keys = ['a','s', 'd','f','g','h','j','k'];

const notes = document.querySelectorAll('.key');

notes.forEach(note =>{
    note.addEventListener('click', ()=> playNote(note))
});

document.addEventListener('keydown', (e)=>{
    if(e.repeat) return
    const key = e.key;
    const keyIndex = keys.indexOf(key);

    if (keyIndex > -1)playNote(notes[keyIndex]);
     
})

function playNote(key){
    const audio = document.getElementById(key.dataset.note);
    audio.currentTime = 0.2;
    audio.play();
    key.classList.add('active')
    audio.addEventListener('ended',() =>{
        key.classList.remove('active')
    })
}

