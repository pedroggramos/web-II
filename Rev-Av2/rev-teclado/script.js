// keydown - ocorre quando uma tecla é pressionada
// keyup - ocorre quando uma tecla é liberada
// keypress - ocorre quando uma tecla que produz caractere é pressionada

// keydown------


// document.getElementById('inputUm').addEventListener('keydown', function(event){

//     console.log('Tecla pressionada: ', event.key)


// })

// IMPEDIR PULO DE LINHA

// document.querySelector("#inputDois").addEventListener('keydown', function(event){

//     if(event.key == 'Enter'){
//         event.preventDefault()
//         alert('A tecla enter foi pressionada, mas a acção previnida')
     
//     }    

//     console.log('A tecla pressionada foi: ', event.key)
// })


// IMPEDIR LETRAS

// var numero = document.querySelector("#inputDois")

// numero.addEventListener('keydown', function(event){
//     if(isNaN(event.key) && event.key != 'Backspace'){
//         event.preventDefault()
//     }
// })


// var volume = 50

// document.addEventListener('keydown', function(event){

//     if(event.key == 'ArrowUp'){
//         volume = Math.min(100, volume + 5)
//     }
//     else if(event.key == 'ArrowDown'){
//         volume = Math.max(0, volume - 5)
//     }
//     else if(event.key == 'm'){
//         volume = 0    
//     }

//     document.getElementById("volume").innerText = 'Volume: ' + volume

// })

// function cor(event){

//     var text = document.getElementById('text')
//     var tecla = event.key
//     switch(tecla){
//         case 'r':
//             document.body.style.background = 'red'
//             text.style.visibility = 'visible'
//             break
//         case 'y':
//             document.body.style.background = 'yellow'
//             text.innerHTML = 'AMO'
//             break
//         case 'b':
//             document.body.style.background = 'blue'
//             text.innerHTML = 'GABI'
//     }
// }

// document.addEventListener('keydown', cor)



// KEYDOWN X KEYUP


// function h(event){
//     if(event.key == ' '){
//         document.body.style.background = 'lightgreen'
//     }
// }

// function hh(event){
//     if(event.key == ' '){
//         document.body.style.background = 'red'
//     }
// }

// document.addEventListener('keydown', h)
// document.addEventListener('keyup',hh)


// var e = document.getElementById('elemento')
// var l = document.getElementById('lista')

// function adicionar(event){
//     if(event.key == 'Enter'){
//         var novoItem = document.createElement('li')
//         novoItem.innerText = e.value
//         l.appendChild(novoItem)
//         e.value = ''
//     }
// }

// e.addEventListener('keydown', adicionar)


// var lista = document.getElementById('lista')
// var elemento = document.getElementById('elemento')

// function add(event){
//     if(event.key == 'Enter'){
//         var novoItem = document.createElement('li')
//         novoItem.innerText = elemento.value
//         lista.appendChild(novoItem)
//         elemento.value = ''
//     }
// }

// elemento.addEventListener('keydown', add)