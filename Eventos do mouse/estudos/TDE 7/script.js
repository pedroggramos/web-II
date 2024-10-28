// resp = document.getElementById("resp")

// document.getElementById("btn").addEventListener('mousedown', function(){
//     resp.innerText = "O botão foi pressionado"
// })

// document.getElementById("btn").addEventListener('mouseup', function(){
//      resp.removeChild(resp.firstChild); // Remove o primeiro nó filho

            // ou

        // resp.innerText = " " 
// })


// document.querySelector("#btn").addEventListener('click', function(){

//     alert("O botão foi clicado!")
// })

// document.querySelector("#btn").addEventListener('dblclick', function(){

//     document.body.style.backgroundColor = 'pink'

// })

// a1 = document.querySelector("#btn")

// document.addEventListener('mouseenter', function(){

//     a1.style.background = 'red'

// })

// document.addEventListener('mouseleave', function(){

//     a1.style.background = 'yellow'

// })


const container = document.querySelector('.container')
const coordenadasSpan = document.getElementById('coordenadasSpan')

container.addEventListener('mousemove', function(event){
    coordenadasSpan.textContent = `X:${event.clientX}, Y: ${event.clientY}`

})