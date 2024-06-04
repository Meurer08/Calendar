const header = document.querySelector(".calendar h3")
const dates = document.querySelector(".dates")
const navs =  document.querySelectorAll("#prev, #next")

const months = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
]

let date = new Date()
let month = date.getMonth()
let year = date.getFullYear()

function renderCalendar() {

  const start = new Date(year, month, 1).getDay()
  const endDate = new Date(year, month + 1, 0).getDate()
  const end = new Date(year, month, endDate).getDay()
  const endDatePrev = new Date(year, month, 0).getDate()

  console.log(start)
  console.log(endDate)
  console.log(end)
  console.log(endDatePrev)

  let datesHtml = "";

  for (let i = start; i > 0; i--) {
    datesHtml += `<li class ="inactives">${endDatePrev - i + 1}</li>`
  }

  for (let i = 1; i <= endDate; i++) {
    let className = i === new Date().getDate() &&
    month === new Date().getMonth() &&
    year === new Date().getFullYear()
    ? 'class="today"' : "";
    datesHtml += `<li ${className}>${i}</li>`
  }


  dates.innerHTML = datesHtml
  header.textContent = `${months[month]} ${year}`
}

renderCalendar()