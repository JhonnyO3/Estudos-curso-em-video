//Estruturas condicionais aninhadas
var idade = 88
if (idade < 16) {
    console.log("Não vota")

} else if (idade < 18 || idade > 65 ){
    console.log('voto opcional')
} else{
    console.log('Obrigatorio votar')
}