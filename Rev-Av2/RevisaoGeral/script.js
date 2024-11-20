// DOM, teclado e mouse

// EVENTOS DE MOUSE-----------------------


// var corpo = document.body

// corpo.style.background = 'red'


// Exemplo de seletor


// getElementByTagName()

// var a = document.getElementsByTagName('p')[1]
// a.style.color = 'red'
// a.style.fontSize = '16pt'
// a.style.background = 'black'
// a.style.fontFamily = 'Verdana'
// a.style.fontWeight = 'bold'

// getElementById()

// var b = document.getElementById('a')

// b.style.color ='black'
// b.style.fontSize ='40pt'
// b.style.background = 'yellow'
// b.style.fontFamily = 'Verdana'

// b.innerHTML = 'Alterando a frase para <strong>DOM<strong>'

// b.innerText = 'Alterando a frase para DOM'


// --------------Mouse--------------

// document.getElementById("btn").addEventListener('click',function(){

//     document.getElementById("text").innerHTML = 'Bom dia!'

// })

// var botao = document.querySelector(".btn2")
// var texto = document.querySelector("#text")

// botao.addEventListener('click', function(){

//     texto.innerHTML = 'Flamengo Penta!'

// })



// MOUSEOVER X MOUSEOUT

// var fundo = document.querySelector("#btn")

// fundo.addEventListener('mouseover', function(){

//     this.style.backgroundColor = 'green'

// })

// fundo.addEventListener('mouseout', function(){

//     this.style.backgroundColor = 'yellow'

// })

// -------

// fundo.addEventListener('click', function(){

//     document.body.style.backgroundColor = 'red'
// })

// fundo.addEventListener("btn").addEventListener('click', function(){

//     document.getElementById('text').src = 'iafeminina.jfif'

// })

// ----dblclick

// var doble = document.getElementById("btn")
// var text = document.getElementById("text")

// doble.addEventListener('dblclick', function(){

//     text.innerHTML = 'Você clicou <strong>duas</strong> vezes!'

// })

// var cores = document.getElementById("btn")

// cores.addEventListener('click', function(){

//     document.body.style.background = 'pink'
// })


// cores.addEventListener('dblclick', function(){

//     document.body.style.background = 'red'
// })


// --------Mousedown x mouseup

// var botao = document.getElementById("btn")

// botao.addEventListener('mousedown', function(){

//     document.body.style.background = 'red'
//     this.innerText = 'voce está pressionando o botao'
// })

// botao.addEventListener('mouseup', function(){


//     document.body.style.background = 'yellow'
//     this.innerText = 'Você soltou o botão'

// })

// ------------Mouseover x mouseout

// var botao = document.getElementById("btn")

// botao.addEventListener('mouseover', function(){


//     this.style.width = '150px'
//     this.style.height = '75px'

// })


// botao.addEventListener('mouseout', function(){


//     this.style.width = '100px'
//     this.style.height = '50px'

// })

// --------Funçao de conta


// var soma = document.getElementById("btn")
// var resposta = document.getElementById('text')

// function somar(){

//     a = Number(document.querySelector('#n1').value)
//     b = Number(document.querySelector('#n2').value)
//     resultado = a + b
    // resposta.innerText = `a soma de ${a} e ${b} é de ${resultado}`


// }

// soma.addEventListener('click', somar)


// -----------Função de Nomes



// var botao = document.getElementById('btn')
// var nome = document.getElementById("nome")
// var resposta = document.getElementById("text")

// function responder(){

//     resposta.innerHTML = `Seja bem vindo ${nome.value}`

}

// botao.addEventListener('click', responder)
 



// EVENTOS DE TECLADO------------------------------

// keydown - ocorre quando uma tecla é pressionada
// keyup - ocorre quando uma tecla é liberada
// keypress - ocorre quando uma tecla que produz caractere é pressionada

// keydown------


document.getElementById('inputUm').addEventListener('keydown', function(event){

    console.log('Tecla pressionada: ', event.key)


})







