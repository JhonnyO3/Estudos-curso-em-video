var botao = document.getElementById('verificar')
botao.addEventListener('click', verifica)

function verifica() {
var data = new Date()
var dataA = data.getFullYear()

var anoNasc = document.getElementById('anoNasc')
anoNasc = Number(anoNasc.value)



if (anoNasc == 0 || anoNasc > dataA) {
    window.alert('[ERRO] - VERIFIQUE OS DADOS E TENTE NOVAMENTE!')
    exibeIdade.innerHTML = `[ERRO] - VERIFIQUE OS DADOS E TENTE NOVAMENTE`

} else {
    var sexo = document.getElementsByName('sexo')
    var exibeIdade = document.getElementById('idade')
    var idade = dataA - anoNasc
    var genero = ''

    //CRIANDO UMA TAG NO HTML DIRETO PELO JS
    var img = document.createElement('img') // Cria uma tag IMG
    img.setAttribute('id', 'foto') //Cria o atributo foto


    if (sexo[0].checked) {
        genero = 'Masculino'
        if (idade > 0 && idade < 4) {
            img.setAttribute('src', "img/bebe-masc.jpg")

        } else if (idade > 4 && idade < 12) {
            img.setAttribute('src', 'crianca-masc.jpg')
        } else if (idade >= 18 && idade < 59) {
            img.setAttribute('src', "img/homem-adulto.jpg")
        } else if (idade > 60) {
            img.setAttribute('src', "img/homem-considerável-idoso.jpg")
        }
    } else if (sexo[1].checked) {
        genero = 'Feminino'
        if (idade > 0 && idade < 4) {
            img.setAttribute('src', "img/bebe-fem.jpg")

        } else if (idade > 4 && idade < 12) {
            img.setAttribute('src', 'crianca-fem.jpg')
        } else if (idade >= 18 && idade < 59) {
            img.setAttribute('src', "img/mulher-adulto.jpg")
        } else if (idade > 60) {
            img.setAttribute('src', "img/velha.jpg")
        }
    }
    exibeIdade.innerHTML = `Detectamos sexo ${genero} e Idade: ${idade}`
    exibeIdade.appendChild(img) //Exibe a imagem 


}

}