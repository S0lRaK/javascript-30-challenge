const playSound = (e) => {
  const audio = document.querySelector(`audio[data-key="${e.key}"]`)
  if (!audio) return // stop function run if there is no audio-key association
  audio.currentTime = 0 // set audio to start
  audio.play()
}

const addStyleClass = (e) => {
  const key = document.querySelector(`.keys__key[data-key="${e.key}"`)
  key.classList.toggle('keys__key_playing')
}

// cannot be anonymous func because this then comes from parent scope (Window)
function removeStyleClass(e) {
  if (e.propertyName !== 'transform') return
  this.classList.remove('keys__key_playing')
}

document.addEventListener('keydown', playSound)
document.addEventListener('keydown', addStyleClass)

const keys = document.querySelectorAll('.keys__key')
keys.forEach((key) => key.addEventListener('transitionend', removeStyleClass))
