const calcular = document.getElementById("calcular")

function calcularimc (){
    const altura = document.querySelector("#altura").value
    const peso = document.querySelector("#peso").value
    const res = document.querySelector('#res')
    const aviso = document.querySelector('#aviso')
    
    let alerta = " " 

    if(peso !== '' && altura !== ''){
        const valorImc = (peso /(altura*altura)).toFixed(1);
        if ( valorImc <= 18.5){
            res.style.color = "red"
            alerta = "Comer bons alimentos e em maiores quantida vai te ajudar"
            categoria= "Magreza" 
        } else if ( valorImc <= 25.5) {
            res.style.color = "green"
            alerta = "Está no caminho certo, se mantenha assim"
            aviso.style.color = "green"
            categoria = "ideal"
        } else if (valorImc <= 29.9){
            res.style.color = "orange"
            alerta = "Comece a se cuidar o mais breve possivel"
            categoria = "Excesso de Peso"
        } else if (valorImc <= 34.9){
            res.style.color = "red"
            alerta = "Inicio das doenças, ligue o alerta saúde"
            aviso.style.color = "yellow"
            categoria = `Obessidade Classe 1`
        } else if (valorImc <= 39.9){
            res.style.color = "red"
            alerta = "Ei, saúde não é brincadeira, conselho de amigo"
            categoria = "Obessidade Classe 2 "
        } else {
            res.style.color = "red"
            alerta = "Nunca é tarde pra tentar melhorar, eu sei que você consegue!!!"
            categoria = "Obessidade Classe 3"
        }
    res.textContent = `Seu IMC é ${valorImc}, sendo assim vc está na categoria ${categoria}`
    aviso.textContent = `${alerta}`

    }else {
        res.textContent = "Os campos não estão preenchidos"
    }
}
calcular.addEventListener('click', calcularimc)






