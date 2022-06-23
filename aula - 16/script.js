// Array é uma variavel que possui varios elementos cada elemento é composto por seu valor e sua chave de identificação

let num = [5, 8, 4]

// Adiciona mais um elemento com base no indice passado de valor 6
//num[3] = 6

//Adiciona mais um elemento sem passagem de indice de valor 7
//num.push(7)

//Exibe a quantidade de elementos do vetor
//num.length

//Faz os elementos ficarem de forma ordenada crescente
//num.sort()



console.log(num)

console.log(`O vetor tem ${num.length} posições`)

console.log(`O primeiro valor do vetor é ${num[0]}`)

num.sort()
console.log(num)