const dayEl = document.querySelector("#day-el")
const monthEl = document.querySelector("#month-el")
const yearEl = document.querySelector("#year-el")

const years = document.querySelector("#years")
const months = document.querySelector("#months")
const days = document.querySelector("#days")

const submitBtn = document.querySelector("#submit-btn")

const date = new Date()

submitBtn.addEventListener('click', getYears)

function getYears(){
    years.innerHTML = date.getFullYear() - yearEl.value
    getMonths()
}

function getMonths(){
    if(monthEl.value > date.getMonth()){
        months.innerHTML = monthEl.value - date.getMonth()
    } else if(monthEl.value < date.getMonth()){
        months.innerHTML = date.getMonth() - monthEl.value
    }
    getDay()
}

function getDay(){
    days.innerHTML = dayEl.value - date.getDate()
}

