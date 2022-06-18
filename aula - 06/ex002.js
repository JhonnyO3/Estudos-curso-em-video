
 /* var nome = window.prompt('Digite seu nome? ') 
window.alert("Seu nome é: " + nome); // o simbolo + é responsavel pela concatenação! */


/* Forma mais Primata de conversão para float

var n1 = Number.parseFloat(window.prompt('Digite um numero: '))
var n2 = Number.parseFloat(window.prompt('Digite outro numero: '))
var s  = n1 + n2
window.alert("A soma dos valores é de: " + s)

*/

/* Conversão para numero Number.parseFloat

var n1 = Number(window.prompt('Digite um numero: '))
var n2 = Number(window.prompt('Digite outro numero: '))
var s  = n1 + n2
window.alert("A soma dos valores é de: " + s)
*/

/* Convertendo o resultado em String

var n1 = Number(window.prompt('Digite um numero: '))
var n2 = Number(window.prompt('Digite outro numero: '))
var s  = n1 + n2
window.alert("A soma dos valores é de: " + s.toString)
*/

// Utilizando da crase `` e ${} é realizado a formatação de String igual como é no python com f'{}'
//window.alert(`A soma entre ${n1} e ${n2} é de ${s}`)


var nome = window.prompt('Digite seu nome: ')
document.write(`Seu nome tem ${nome.length} letras!`)
document.write(`<h1> Nome em maiusculo: ${nome.toUpperCase} </h1>`)
document.write(`Nome em minusculo: ${nome.toLowerCase}`)






 
