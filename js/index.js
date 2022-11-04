const audio = new Audio();
const player = document.querySelector('.player');
const tracksCard = document.getElementsByClassName('track');



const pauseBtn = document.querySelector('.player__controller-pause');
const stopBtn = document.querySelector('.player__controller-stop');

const playMusic = event => {
  const trackActiv = event.currentTarget

  audio.src = trackActiv.dataset.track;
  audio.play()
  pauseBtn.classList.remove('player__icon_play')
  player.classList.add('player_active')

  for (let i = 0; i < tracksCard.length; i++) {
    tracksCard[i].classList.remove('track_active')
  }

  trackActiv.classList.add('track_active')
}

for (let i = 0; i < tracksCard.length; i++) {
  tracksCard[i].addEventListener('click', playMusic);
}

pauseBtn.addEventListener('click', () => {
  if (audio.paused) {

    audio.play()
    pauseBtn.classList.remove('player__icon_play')
  } else {
    audio.pause()
    pauseBtn.classList.add('player__icon_play')

  }
})

stopBtn.addEventListener('click', () => {

  audio.src = ''
  stopBtn.classList.remove('player_active')
  for (let i = 0; i < tracksCard.length; i++) {
    tracksCard[i].classList.remove('track_active')
  }
  player.classList.remove('player_active')
})