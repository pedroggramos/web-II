a
a
c
push
c
unshift
b
d




9)

distancia = +prompt("Digite a distância em quilometros: ")


var custoEnvio


switch (true) {
  case distancia <= 100:
    custoEnvio = 10 * distancia
    break


  case distancia >= 101 && distancia <= 300:
    custoEnvio = 8 * distancia
    break


  case distancia > 300:
    custoEnvio = 6 * distancia
    break
}


document.write(`O custo de envio é de ${custoEnvio}`)




