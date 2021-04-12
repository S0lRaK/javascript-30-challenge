const SECONDS_IN_A_MIN = 60
const MINS_IN_AN_HOUR = 60
const HOURS_IN_12_HOUR_CLOCK = 12
const CIRCLE_DEGREES = 360
const OFFSET_ROTATION_DEGREES = 90 // hand starts horizontal -> 0º

const handSecond = document.querySelector('.hand--sec')
const handMinute = document.querySelector('.hand--min')
const handHour = document.querySelector('.hand--hour')

const tickAudio = new Audio('sounds/tick.mp3')

const playSound = () => {
  tickAudio.currentTime = 0 // set audio to start
  tickAudio.play()
}

const setClockAnalog = (seconds, minutes, hours) => {
  const secondsDegrees =
    (seconds / SECONDS_IN_A_MIN) * CIRCLE_DEGREES + OFFSET_ROTATION_DEGREES

  if (seconds === 0) {
    handSecond.classList.toggle('hand--no-transition')
  } else if (seconds === 1) {
    handSecond.classList.toggle('hand--no-transition')
  }

  handSecond.style.transform = `rotate(${secondsDegrees}deg)`

  const minutesDegrees =
    (minutes / MINS_IN_AN_HOUR) * CIRCLE_DEGREES +
    OFFSET_ROTATION_DEGREES +
    (secondsDegrees - OFFSET_ROTATION_DEGREES) / MINS_IN_AN_HOUR
  handMinute.style.transform = `rotate(${minutesDegrees}deg)`

  const hoursDegrees =
    (hours / HOURS_IN_12_HOUR_CLOCK) * CIRCLE_DEGREES +
    OFFSET_ROTATION_DEGREES +
    (minutesDegrees - OFFSET_ROTATION_DEGREES) / HOURS_IN_12_HOUR_CLOCK
  handHour.style.transform = `rotate(${hoursDegrees}deg)`
}

const digitalSecond = document.querySelector('.clock-digital__segment.sec')
const digitalMinute = document.querySelector('.clock-digital__segment.min')
const digitalHour = document.querySelector('.clock-digital__segment.hour')

const setClockDigital = (seconds, minutes, hours) => {
  digitalSecond.textContent = seconds < 10 ? '0' + seconds : seconds
  digitalMinute.textContent = minutes < 10 ? '0' + minutes : minutes
  digitalHour.textContent = hours < 10 ? '0' + hours : hours
}

const setClocks = (now = new Date()) => {
  const seconds = now.getSeconds()
  const minutes = now.getMinutes()
  const hours = now.getHours()

  setClockAnalog(seconds, minutes, hours)
  setClockDigital(seconds, minutes, hours)
  playSound()
}

setInterval(setClocks, 1000)
