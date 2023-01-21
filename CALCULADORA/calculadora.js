const number = [...document.querySelectorAll('.num')] 
const op = [...document.querySelectorAll('.op')]
const res = document.querySelector('.res')
const display = document.querySelector('#p_display')
const ligDes = document.querySelector('#onOff')
const limpar = document.querySelector('#limpar')
const igual = document.querySelector('#igual')
const cpy = document.querySelector('#cpy')
const exibir = document.querySelector('#calc_aba')
const calc = document.querySelector('#calc')
const direita = document.querySelector('#direita')

let sinal = false 
let vir = false 

number.map((el)=>{
    el.addEventListener('click', (evt)=>{
        sinal = false
        if(evt.target.innerHTML == ","){
            if(!vir){
                vir = true
                if(display.innerHTML == '0'){
                    display.innerHTML ="0,"
                } else {
                    display.innerHTML += evt.target.innerHTML
                }   
            }
        }  
         else {
            if(display.innerHTML == "0"){
                display.innerHTML = ""
            }
            display.innerHTML += evt.target.innerHTML 
        }
    })
})
        

op.map((el)=>{
    el.addEventListener('click', (evt)=>{
        if(!sinal){
            sinal = true
            if(display.innerHTML == "0"){
                display.innerHTML = ""
            }
            if(evt.target.innerHTML == "x"){
                display.innerHTML += "*"
            } else {
                display.innerHTML += evt.target.innerHTML
            }           
        }        
    })
})

limpar.addEventListener('click', (evt)=>{
    sinal = false
    vir = false 
    display.innerHTML = "0" 
})

igual.addEventListener('click', (evt)=>{
    sinal = false
    vir = false 
    const res = eval(display.innerHTML)
    display.innerHTML = res  
})

cpy.addEventListener('click', (evt)=>{
    // display.innerHTML.select() FUNÇÃO PARA MOBILE **** MUITO IMPORTNATE *****
    // display.innerHTML.setSelectionRange(0, 40) FUNÇÃO PARA MOBILE **** MUITO IMPORTNATE *****
    navigator.clipboard.writeText(display.innerHTML)//navigator.clipboard.writeText faz a copia do contéudo para área de trabalho
    // O METODO eval() JÁ FAZ TODAS AS OPERAÇÕES 
})

exibir.addEventListener('click', (evt)=>{
    calc.classList.toggle('calc_exibir')
    if(calc.classList.contains('calc_exibir')){
        direita.setAttribute('src', 'seta_esquerda.svg')
    } else {
        evt.target.setAttribute('src', 'sete_direita.svg')
    }
})




