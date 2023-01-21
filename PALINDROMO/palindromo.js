'use strict'
let palavra = document.getElementById('palin')
let result = document.getElementById ('result')
let add = document.getElementById('des')


function descobrir(){
    let regex= /[\w]+/ig;
    let palavraV = palavra.value
    let target = palavraV.match(regex).join('').toUpperCase()

    if (target == target.split('').reverse().join('')){
        result.innerText = `${palavraV} é um palindromo`
        result.style.color = "green";
    } else {
        result.innerText = `${palavraV} não é um palindromo`
        result.style.color = "red"
    }
    palavra.value = ''
    palavra.focus()
}



// Função para colocar o enter

palavra.addEventListener("keyup", function(event){
    //Se teclou o enter 13
    if (event.keyCode === 13) {
       event.preventDefault();
       add.click();
    }
})

