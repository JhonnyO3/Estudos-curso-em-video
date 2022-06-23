let valores = [8, 1, 5, 7, 4, 2, 9]
valores.sort()
console.log(valores)


/*
//Pratica convencional 
for (let i=0; i < valores.length; i++) {
    console.log(`A posição ${i} tem o valor ${valores[i]}`)
}
*/



//pratica simplificada
for (let i in valores) {
    console.log(`A posição ${i} tem o valor ${valores[i]}`)
}

let posicao = valores.indexOf(7) // Caso retorne -1, é porque não existe ocorrencias desse numero no array
console.log(`O valor 7 está na posição ${posicao}`)