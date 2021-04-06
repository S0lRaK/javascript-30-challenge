const SECONDS_IN_A_MIN = 60
const MINS_IN_AN_HOUR = 60
const HOURS_IN_12_HOUR_CLOCK = 12
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

  if (seconds === 0) {
    handSecond.classList.toggle('hand--no-transition')
  } else if (seconds === 1) {
    handSecond.classList.toggle('hand--no-transition')
  }

  handSecond.style.transform = `rotate(${secondsDegrees}deg)`

  const minutes = now.getMinutes()
  const minutesDegrees =
    (minutes / MINS_IN_AN_HOUR) * CIRCLE_DEGREES +
    OFFSET_ROTATION_DEGREES +
    (secondsDegrees - OFFSET_ROTATION_DEGREES) / MINS_IN_AN_HOUR
  handMinute.style.transform = `rotate(${minutesDegrees}deg)`

  const hours = now.getHours()
  const hoursDegrees =
    (hours / HOURS_IN_12_HOUR_CLOCK) * CIRCLE_DEGREES +
    OFFSET_ROTATION_DEGREES +
    (minutesDegrees - OFFSET_ROTATION_DEGREES) / HOURS_IN_12_HOUR_CLOCK
  handHour.style.transform = `rotate(${hoursDegrees}deg)`

  playSound()
}

setInterval(setClock, 1000)
