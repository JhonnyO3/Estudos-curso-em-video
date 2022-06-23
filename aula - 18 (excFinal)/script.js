var add = document.getElementById('adicionar')
add.addEventListener('click', exibir)
var lista = []


function exibir() {
    var numero = document.getElementById('numero')
    var numero = Number(numero.value)

    if (numero > 100 || numero < 1) {
        window.alert("[ERROR] O coloque um numero entre (1-100)!")
    } else {
        let item = document.createElement('option')
        let tabela = document.getElementById('tabela')
        item.text = `Valor ${numero} adicionado.`
        tabela.appendChild(item)
        lista.push(numero)

    }
}

var finalizar = document.getElementById('finalizar')
finalizar.addEventListener('click', calcular)

function calcular() {
    
    console.log(lista)

    let exbibe = document.getElementById('exibe')
    lista.sort()
    exbibe.innerHTML = `Ao todo, temos ${lista.length} números cadastrados.`

    exbibe.innerHTML += `<br>O maior valor informado foi ${Math.max.apply(null, lista)}`

    exbibe.innerHTML += `<br>O menor valor informado foi ${Math.min.apply(null, lista)}`

    exbibe.innerHTML += `<br>Somando todos os valores, temos ${lista.reduce(somar, 0)}`

    exbibe.innerHTML += `<br>Somando as medias dos valores, temos ${lista.reduce(somar, 0)/lista.length}`

    function somar(total, number) {
        return total + number
    }







}
