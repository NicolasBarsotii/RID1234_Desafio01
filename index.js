const imagem1 = document.getElementById("imagem1")
const imagem2 = document.getElementById("imagem2")
const setaEsquerda = document.getElementById("setaEsquerda")
const setaDireita = document.getElementById("setaDireita")

function rolarParaDIreita() {
    imagem1.style = 'display: none;'
    setaDireita.style = 'display:none'
    imagem2.style = 'display: flex'
    setaEsquerda.style = 'display:flex'
}

function rolarParaEsquerda() {
     imagem1.style = 'display: flex;'
    setaDireita.style = 'display: flex'
    imagem2.style = 'display: none'
    setaEsquerda.style = 'display: none'
}