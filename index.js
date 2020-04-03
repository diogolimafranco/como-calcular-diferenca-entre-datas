const inputStart = document.querySelector('#start')
const inputEnd = document.querySelector('#end')
const button = document.querySelector('button')
const span = document.querySelector('h1 > span')

function calculateDateDiff () {
  let start = inputStart.value
  let end = inputEnd.value

  start = new Date(start)
  end = new Date(end)

  let diffInTime = Math.abs(end - start)
  let timeInOneDay = 1000 * 60 * 60 * 24 // milisegundos * segundos * minutos * horas dia
  let diffInDays = Math.ceil(diffInTime / timeInOneDay)

  return diffInDays
}

button.addEventListener('click', () => {
  const diffInDays = calculateDateDiff()
  span.innerHTML = diffInDays
})