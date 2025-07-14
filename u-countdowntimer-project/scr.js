const countdown = document.getElementById('countdown')
const dayele = document.getElementById('day')
const hoursele = document.getElementById('hours')
const minutesele = document.getElementById('menit')
const secondele = document.getElementById('second')
const inputhours = document.getElementById('inputHours')
const inputminutes = document.getElementById('inputMinutes')
const inputsecond = document.getElementById('inputSecond')
const tombol = document.getElementById('start')

let counint;

function statr () {
    let hours = parseInt(inputhours.value) || 0
    let minutes = parseInt(inputminutes.value) || 0
    let second = parseInt(inputsecond.value) || 0

    let total = hours * 3600 + minutes *60 + second

    if (total <= 0) {
        alert('please enter a valid time')
        return
    }

    inputhours.value = ''
    inputminutes.value = ''
    inputsecond.value = ''

    counint = setInterval(()=>{
        const day = Math.floor(total/86400)
        const hours = Math.floor((total % 86400)/3600 )
        const minutes = Math.floor((total % 3600)/60 )
        const second = Math.floor((total % 60))

        dayele.textContent = day.toString().padStart(2,'0')
        hoursele.textContent = hours.toString().padStart(2,'0')
        minutesele.textContent = minutes.toString().padStart(2,'0')
        secondele.textContent = second.toString().padStart(2,'0')

        total--

        if(total < 0){
            clearInterval(countdown)
            alert("berhenti")
        
        }
    }, 1000
)
}


tombol.addEventListener('click', () => {
    clearInterval(countdown)
    statr()
})