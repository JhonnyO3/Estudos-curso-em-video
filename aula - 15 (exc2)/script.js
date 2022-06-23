var botao = document.getElementById('verificar')
botao.addEventListener('click', multiplica)


function multiplica() {
    var numero = document.getElementById('tabuada')
    var numero = Number(numero.value)
    var i = 0 
    let tabela = document.getElementById('tabela')

    if (numero == 0) {
        window.alert("[ERRO] DIGITE UM NUMERO VALIDO!")
    } else {

        while (i < 10) {
            i++
            var resultado = numero * i
            let item = document.createElement('option')
            item.text = `${numero} x ${i} = ${resultado}`
            tabela.appendChild(item) 
        }
    }
        
}

