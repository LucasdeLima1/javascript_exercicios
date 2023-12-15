let num = [5, 8, 2, 9, 3]
num.sort()
num.push(1)
console.log(`Nosso vetor tem ${num.length} posições`)
console.log(`O valor do primeiro elemento do vetor é ${num[0]}`)
console.log(num)
let pos = num.indexOf(3)
if (pos == -1) {
    console.log(`[ERRO]`)
} else {
    console.log(`O valor 8 está na posição ${pos}`)
}