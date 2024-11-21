var slides = ['s1.jpg','s2.jpg','s3.jpg','s4.jpg','s5.jpg']

var tam = slides.length
var satual = 0
var tmpslider

function trocaAutomatica(){
    satual++
    if(satual >= tam){
        satual = 0
    }
}

document.querySelector('#dvSlider').style.backgroundImage = `url('${slides[satual]}')`

function inicialSlider(){
    document.querySelector('#dvSlider').style.backgroundImage=`url('${slides[satual]}')`

    tmpslider = setInterval(trocaAutomatica, 2000)
}

function parar(){
    clearInterval(tmpslider)
}

function troca(dir){
    satual += dir
    if(satual < 0){
        satual = 4
    }
    else if(satual >= tam){
        satual = 0
    }

    document.querySelector('#dvSlider').style.backgroundImage = `url('${slides[satual]}')`

    clearInterval(tmpslider)
}

