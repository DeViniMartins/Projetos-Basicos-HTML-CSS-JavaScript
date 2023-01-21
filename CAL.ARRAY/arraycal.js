'use strict'

let na1 = document.getElementById('na1')
let na2 = document.getElementById('na2')
let res = document.getElementById('res')
const soma = document.querySelector('#soma')
const sub = document.querySelector('#sub')
const mult = document.querySelector('#mult')
const divisao = document.getElementById('divisao')
const limpar = document.querySelector('#btn_limpar1')
const limpar2 = document.querySelector('#btn_limpar2')


const op = [
    ()=>{
        const val = [document.getElementById('na1').value, document.getElementById('na2').value]
        res.value = Number(val[0]) + Number(val[1])
        if (Number(val[0]) == "" && Number(val[1]) == ""){
            res.value = ""
        } 
    },
    ()=>{
        const val = [document.getElementById('na1').value, document.getElementById('na2').value]
        res.value = Number(val[0]) - Number(val[1]) 
        if (Number(val[0]) == "" && Number(val[1]) == ""){
            res.value = ""
        } 
    },
    ()=>{
        const val = [document.getElementById('na1').value, document.getElementById('na2').value]
        res.value = Number(val[0]) * Number(val[1])
        if (Number(val[0]) == "" && Number(val[1]) == ""){
            res.value = ""
        }  
    },
    ()=>{
        const val = [document.getElementById('na1').value, document.getElementById('na2').value]
        res.value = Number(val[0]) / Number(val[1])
        if (Number(val[0]) == "" && Number(val[1]) == ""){
            res.value = ""
        }  
    }
]

soma.addEventListener('click', op[0])
sub.addEventListener('click', op[1])
mult.addEventListener('click', op[2])
divisao.addEventListener('click', op[3])

limpar.addEventListener('click', ()=>{
    na1.value = " "
})

limpar2.addEventListener('click', ()=> {
    na2.value = " "
    res.value = " "
})
