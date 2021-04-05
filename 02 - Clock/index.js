const SECONDS_IN_A_MIN = 60
const MINS_IN_AN_HOUR = 60
const CIRCLE_DEGREES = 360
const OFFSET_ROTATION_DEGREES = 90 // hand starts horizontal -> 0º

const handSecond = document.querySelector('.hand--sec')
const handMinute = document.querySelector('.hand--min')
const handHour = document.querySelector('.hand--hour')

const tickAudio = new Audio('tick.mp3')

const playSound = () => {
  tickAudio.currentTime = 0 // set audio to start
  tickAudio.play()
}

const setClock = (now = new Date()) => {
  const seconds = now.getSeconds()
  const secondsDegrees =
    (seconds / SECONDS_IN_A_MIN) * CIRCLE_DEGREES + OFFSET_ROTATION_DEGREES
  handSecond.style.transform = `rotate(${secondsDegrees}deg)`

  const minutes = now.getMinutes()
  const minutesDegrees =
    (minutes / MINS_IN_AN_HOUR) * CIRCLE_DEGREES + OFFSET_ROTATION_DEGREES
  handMinute.style.transform = `rotate(${minutesDegrees}deg)`

  const hours = now.getHours()
  const hoursDegrees = (hours / 12) * CIRCLE_DEGREES + OFFSET_ROTATION_DEGREES
  handHour.style.transform = `rotate(${hoursDegrees}deg)`

  playSound()
}

setInterval(setClock, 1000)
