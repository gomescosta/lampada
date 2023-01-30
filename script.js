var lamp = document.getElementById('lampada')

function estaQuebrada(){
    return lamp.src.indexOf('quebrada') > -1
}

function ligar(){
    if(!estaQuebrada()){

    lamp.src = '/imagens/ligar.svg'
}
}
function desligar(){
    if(!estaQuebrada()){
    lamp.src = '/imagens/desligada.svg'
}
}

lamp.addEventListener('click', quebrar)
function quebrar(){
    lamp.src ='/imagens/quebrada.svg'
}
