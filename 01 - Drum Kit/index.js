const playSound = (event) => {
  const audio = document.querySelector(`audio[data-key="${event.key}"]`)
  if (!audio) return // stop function run if there is no audio-key association
  audio.currentTime = 0 // set audio to start
  audio.play()
}

const addStyleClass = (event) => {
  const key = document.querySelector(`.keys__key[data-key="${event.key}"`)
  if (!key) return // stop function run if there is no key specific class
  key.classList.toggle('keys__key_playing')
}

const removeStyleClass = (event) => {
  if (event.propertyName !== 'transform') return
  event.target.classList.remove('keys__key_playing')
}

document.addEventListener('keydown', playSound)
document.addEventListener('keydown', addStyleClass)

const keys = document.querySelectorAll('.keys__key')
keys.forEach((key) => key.addEventListener('transitionend', removeStyleClass))
