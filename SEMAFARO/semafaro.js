const ativar = document.getElementById('ativar')
const parar = document.getElementById('parar')
let vermelho = document.getElementById('vermelho')
let cont_red = document.getElementById('number-vermelho')
let amarelo = document.getElementById('amarelo')
let cont_yellow = document.getElementById('number-amarelo')
let verde = document.getElementById('verde')
let cont_green = document.getElementById('number-verde')
const ativar2 = document.querySelector('#sem2')


let contagemDeTempoSemafaroVermelho = 1
let contagemDeTempoSemafaroAmarelo = 1
let contagemDeTempoSemafaroVerde = 1

ativar.addEventListener('click', ()=>{
 
    const iniciarVerde = setInterval(()=>{
        cont_green.innerHTML = contagemDeTempoSemafaroVerde
        contagemDeTempoSemafaroVerde++ 
        if(contagemDeTempoSemafaroVerde > 61){
            stop(iniciarVerde)
            cont_green.innerHTML = " "
        } 
    },1000)

    const iniciarAmarelo = setInterval(() => {
        if(contagemDeTempoSemafaroVerde >= 62){
            cont_yellow.innerHTML = contagemDeTempoSemafaroAmarelo
            contagemDeTempoSemafaroAmarelo++
            if (contagemDeTempoSemafaroAmarelo > 6){
                stop(iniciarAmarelo)
                cont_yellow.innerHTML = " "
            }
        }
    }, 1000);

    const iniciarVermelho = setInterval(()=>{
        if(contagemDeTempoSemafaroAmarelo > 6){
            cont_red.innerHTML = contagemDeTempoSemafaroVermelho
            contagemDeTempoSemafaroVermelho++
            if(contagemDeTempoSemafaroVermelho > 61){
                stop(iniciarVermelho)
                cont_red.innerHTML = " "
            } 
        }
    }, 1000);

});
