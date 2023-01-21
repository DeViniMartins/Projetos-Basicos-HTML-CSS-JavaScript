const ligar = document.querySelector('#ligar')
const desligar = document.querySelector('#desligar')
const fire = document.querySelector('#fire')
const quebrada = document.querySelector('#quebrada')
const lamp = document.querySelector('#lamp')

function isbroke () {
    return lamp.src.indexOf('quebrada') > -1
}

function on (){
    if(!broke ()){
        lamp.src = './imagens/ligada.jpg'
    }
}

function off (){
    if(!broke ()){
        lamp.src = './imagens/desligada.jpg'
    }
}

function broke (){
    lamp.src = './imagens/quebrada.jpg'
}

lamp.addEventListener('mouseover', on)
lamp.addEventListener('mouseleave', off)
lamp.addEventListener('dblclick', broke)
ligar.addEventListener('click', on)
desligar.addEventListener('click', off)
quebrada.addEventListener('click', broke)