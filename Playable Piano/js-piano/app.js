const play = document.getElementById('play');
let audio1 = new Audio();
audio1.src = 'melee sound.wav'

play.addEventListener('click', function(){
    audio1.play();
    console.log('clix');

})

//let audio = new Audio('https://archive.org/download/24-piano-keys/key02.mp3');
//audio.play();



/*

const pianoKeys = document.querySelectorAll('.key')

function playSound() {
    new Audio(https://www2.cs.uic.edu/~i101/SoundFiles/PinkPanther60.wav)

}

pianoKeys.forEach(pianoKey => {
    pianoKey.addEventListener('click', playSound)

})

*/