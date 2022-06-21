var agora = new Date()
var hora = agora.getHours()

console.log(hora)

var quadrado = document.getElementById('quadrado')
var img = document.getElementById('foto')
quadrado.innerHTML = `Agora são ${hora}:00 horas`



if (hora > 6 && hora < 12) {
    document.body.style.backgroundColor = 'rgb(255, 238, 82)'
    img.src="./img/amanhecer.jpg"
} else if (hora > 12 && hora < 18) {
    document.body.style.backgroundColor = '#AE3412'
    img.src = "./img/entardecer.jpg"
} else {
    document.body.style.backgroundColor = 'rgb(14, 33, 197)'
    img.src = 'anoitecer-no-deserto'
}
