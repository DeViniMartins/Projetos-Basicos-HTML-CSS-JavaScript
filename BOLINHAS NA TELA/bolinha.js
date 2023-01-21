const num_objetos = document.querySelector('#num_objetos')
const adicionar = document.querySelector('#btn_add')
const remover = document.querySelector('#btn_remover')
const quantidade = document.querySelector('#txt_quantidade')
const palco = document.querySelector('#palco')

let larguraPalco = palco.offsetWidth
let alturaPalco = palco.offsetHeight 
let bolas = []
let numBola = 0

class Bola{
    constructor(arrayBolas, palco){
        this.tam = Math.floor(Math.random() *15)+10
        this.r = Math.floor(Math.random() *255)
        this.g = Math.floor(Math.random() *255)
        this.b = Math.floor(Math.random() *255)
        this.px = Math.floor(Math.random()*(larguraPalco - this.tam))
        this.py = Math.floor(Math.random()*(alturaPalco - this.tam))
        this.velx = Math.floor(Math.random()*2) + 0.5
        this.vely = Math.floor(Math.random()*2) + 0.5
        this.dirx = (Math.random()*10) > 5 ? 1 : -1 
        this.diry = (Math.random()*10) > 5 ? 1 : -1 
        this.palco = palco
        this.arrayBolas = arrayBolas
        this.id = Date.now()+"_"+Math.floor(Math.random()* 100000000000000)
        this.desenhar()
        this.controle = setInterval(this.controlar,10)
        this.eu = document.getElementById(this.id)
        numBola++
        num_objetos.innerHTML = numBola
    }
    minhaposicao = () => {
        return this.arrayBolas.indexOf(this)
    }

    removerBolinha = () => {
        clearInterval(this.controle) //ira parar o objeto na tela
        bolas = bolas.filter((b)=>{
            if(b.id!=this.id){
                return b
            }
        })
        this.eu.remove()
        numBola --
        num_objetos.innerHTML = numBola
    }
    
    desenhar = () => {
        const div1 = document.createElement("div")
        div1.setAttribute("id", this.id)
        div1.setAttribute("class", "bola")
        div1.setAttribute("style", `left:${this.px}px;top:${this.py}px;width:${this.tam}px;height:${this.tam}px;background-color:rgb(${this.r},${this.g},${this.b});`)
        this.palco.appendChild(div1)
    }

    controle_bordas = () => {
        if(this.px + this.tam >= larguraPalco){
            this.dirx = -1
        } else if (this.px <= 0){
            this.dirx = 1
        }
        if(this.py + this.tam >= alturaPalco){
            this.diry = -1
        } else if (this.py <= 0){
            this.diry = 1
        }
    }

    controlar = () => {
        this.controle_bordas()
        this.px += this.dirx * this.velx
        this.py += this.diry * this.vely
        this.eu.setAttribute("style", `left:${this.px}px;top:${this.py}px;width:${this.tam}px;height:${this.tam}px;background-color:rgb(${this.r},${this.g},${this.b});`)
        if ((this.px > larguraPalco) || (this.py > alturaPalco)){
            this.remover()
        }
    }
}

window.addEventListener('resize', (evt)=>{
    larguraPalco = palco.offsetWidth
    alturaPalco = palco.offsetHeight 
})

adicionar.addEventListener('click', (evt)=>{
    const quant = quantidade.value
    for (let i = 0; i< quant; i++){ // for feito para colocar a quantidade de bolinhas
        bolas.push(new Bola(bolas,palco))
    }
}) 

remover.addEventListener('click', (evt)=>{
    bolas.map((b)=>{
        //remover todas as bolinhas do array
        b.removerBolinha()
    })
})