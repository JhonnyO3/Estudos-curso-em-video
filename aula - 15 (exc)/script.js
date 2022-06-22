var botao = document.getElementById('verificar')
botao.addEventListener('click', contador)

function contador() {
    var exibe = document.getElementById('contagem')
    var inicio = document.getElementById('inicio')
    var i = Number(inicio.value)

    var fim = document.getElementById('fim')
    var f = Number(fim.value)

    var passo = document.getElementById('passo')
    var p = Number(passo.value)

    if (i == 0 || p == 0 || f == 0 || i > f || p == 0) {
        window.alert(`[ERRO] Dados inseridos de forma incorreta!`)
        exibe.innerHTML = `<p> [ERRO] </p>`
    } else {
        exibe.innerHTML = `Contando: `
        for (let c = i; c <= f; c += p) {
            exibe.innerHTML += `${c} `
        }
    } 
        
}