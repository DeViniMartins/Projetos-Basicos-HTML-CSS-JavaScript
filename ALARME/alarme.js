// Alarme
const dataTotal = document.querySelector('#div_data')
const myClock = document.querySelector('#div_relogio')
const ativar = document.querySelector('#btn_ativar')
const parar = document.querySelector('#btn_parar')
const tempoAlarme = document.querySelector('#tmp_alarme')
const hora = document.querySelector('#hora_alarme')
const timer = document.querySelector('#timer')

//Data
const data =  new Date()
    const dT = data.toDateString() //`${dia}/${mes}/${year}`
    dataTotal.innerHTML = dT

//Relógio 
const clock = () => {
    const data = new Date()
    let hora = data.getHours()
    hora = hora < 10 ? "0" + hora : hora 
    
    let min = data.getMinutes()
    min = min < 10 ? "0" + min : min

    let sec = data.getSeconds()
    sec = sec < 10 ? "0" + sec : sec 

    timeComplete = `${hora}:${min}:${sec}`
    myClock.innerHTML = timeComplete

    if(alarme_ativado && !alarme_tocando){
        if(data.getTime() >= timestamp_alarme){
            alarme_tocando = true
            // 
            timer.classList.add('alarm')
        }
    }

}
const inter = setInterval(clock, 1000)

const som_alarme = new Audio()
som_alarme.loop = -1 

let timestamp_atual = null
let timestamp_alarme = null 
let alarme_ativado = false // indica se o alarme está ativado
let alarme_tocando = false // indica se o alarme está tocando 

ativar.addEventListener('click', ()=>{
    timestamp_atual = Date.now()
    timestamp_alarme = timestamp_atual + (tempoAlarme.value * 1000)
    alarme_ativado = true
    const dt_alarme = new Date(timestamp_alarme)
    hora.innerHTML = "Hora do alarme" + dt_alarme.getHours() + ":" + dt_alarme.getMinutes() + ":" + dt_alarme.getSeconds()   //`Hora do alarme: ${dt_alarme.getHours()}:${dt_alarme.getMinutes()}:${dt_alarme.getSeconds()}`
})


parar.addEventListener('click', ()=>{
    alarme_ativado = false
    alarme_tocando = false
    hora.innerHTML = "Hora do Alarme"
    tempoAlarme.value = 0
    timer.classList.remove('alarm')
    som_alarme.pause()
    som_alarme.currentTime = ""
})

/*
// GET
getData() // Dia do mês
getDay() // Dia da semana (Números)
getFullYear() // Ano com 4 dígitos
getHours() //Horas
getMiliseconds() //Milisegundos
getMinutes() // Minutos
getMonth () //Mês
getSeconds() //Segundos 
getTime() // Timestamp (milisegunds desde 1 de Janeiro de 1970, 00:00:00 UTC)
Date.now() // Timestamp (milisegunds desde 1 de Janeiro de 1970, 00:00:00 UTC)
getTimezoneOffset()// Timezone da localidade

// SET
satDate() //Define o dia do mês para DATA
setMonth() // Define um mês para a DATA
setFullYear() // Define um ano para a DATA
setHours() // Define horas
setMinutes() //Define minutos
setSeconds() //Define segundos
setMiliSeconds() // Define Milisegundos

toDateSring() //Retorna somente a DATA
*/





