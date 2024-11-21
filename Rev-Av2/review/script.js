// -----------Filter()


// const arr = [1, 2, 3, 4, 5]
// const filteredArr = arr.filter(function(element) {
// return element % 2 === 0
// })

// console.log(filteredArr)

// const array = [4,8,2,5,3,7]

// const arrayFiltered = array.filter(function(element){
//     return element % 2 === 0
// })

// console.log(arrayFiltered)


// ------Date()

// const DataAtual = new Date()

// const ano = DataAtual.getFullYear()
// const mes = (DataAtual.getMonth() + 1).toString(2, '0')
// const day = DataAtual.getDay().toString().padStart(2,'0')
// const hora = DataAtual.getHours().toString().padStart(2, '0')
// const min = DataAtual.getMinutes().toString().padStart(2, '0')

// console.log(`${day} - ${mes} - ${ano}  ${hora}:${min}`)


// const date1 = new Date("2025-11-01")
// const date2 = new Date("2024-12-30")

// diferencaMs = date1 - date2



// const dias = diferencaMs / (24 * 60 * 60 * 1000)

// console.log(dias)


// ---------EVENT KEY

// const botao = document.getElementById("botao")

// botao.onclick = function(){
//     this.textContent = 'Clicado!'
//     this.style.background = 'red'
//     this.style.color = 'black'
// }

// const campo = document.getElementById('meuCampo')

// campo.addEventListener('keydown', function(event) {
//     console.log('Tecla pressionada:', event.key)
//     })
    
//     campo.addEventListener('keypress', function(event) {
//     console.log('Caractere inserido:', event.key)
//     })

// Function

// function mostrarOpcao(opcao){
//     console.log('A opção selecionada foi: ', opcao)
// }


// function expandCard(card){
//     card.style.transform = 'scale(1.05)'
//     card.style.boxShadow = '15px 15px rgba(0,0,0,0.4)'
// }

// function shinkCard(card){
//     card.style.transform = 'scale(1)'
//     card.style.boxShadow = 'none'
// }


// function flipCard(card){
// 	card.classList.toggle('flipped')
// }

// O método .toggle() da classList adiciona ou remove uma classe específica do elemento.
// Quando toggle('flipped') é chamado:
//     Se a classe 'flipped' não estiver presente no elemento, ela será adicionada.
//     Se a classe 'flipped' já estiver presente, ela será removida.


// var a = document.getElementById('btn1')
// var b = document.getElementById('btn2')

// a.addEventListener('click',function(){
//         var novoParagrafo = document.createElement('p')
//         novoParagrafo.textContent = 'Novo Paragrafo Criado'
//         document.getElementById('container').appendChild(novoParagrafo)
// })

// b.addEventListener('click', function(){
//     var paragrafos = document.getElementsByTagName('p')
//     for(var i = 0; i < paragrafos.length;i++){
//         paragrafos[i].textContent='Paragrafo Modificado'
//     }
// })

// var a = document.getElementById("btn1")
// var b = document.getElementById('btn2')

// a.addEventListener("click", function(){
//     var novoParagrafo = document.createElement('p')
//     novoParagrafo.textContent = 'Novo paragrafo Criado'
//     document.getElementById('container').appendChild(novoParagrafo)
// })

// b.addEventListener('click', function(){
//     var paragrafo = document.getElementsByTagName('p')
//     for(var i = 0; i < paragrafo.length; i++){
//         paragrafo[i].innerHTML = 'Paragrafo modficado'
//     }
// })