var n1 = Number(window.prompt('Digite um número: '))

var n2 = Number(window.prompt('Digite outro número: '))

var media = (n1 + n2) / 2

window.alert(`Foi ${media}`)

if (media == 10) {
    window.alert('Aprovado com Distinção!')
} else if (media < 10 && media >= 7) {
    window.alert('Aprovado!')
} else {
    window.alert('Reprovado!')
}


