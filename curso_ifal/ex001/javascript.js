var n1 = Number(window.prompt('Digite um número...'))

var n2 = Number(window.prompt('Digite outro número...'))

var n3 = Number(window.prompt('Digite outro número...'))

var r = ''

if (n1 < n2) {
    r = n2
} else {
    r = n1
}
if (r < n3) {
    r = n3
}

window.alert(`O maior número é ${r}`)

/*
function calculo() {
var res = window.document.getElementById('res')
var v1 = window.document.getElementById('n1')
var v2 = window.document.getElementById('n2')
var v3 = window.document.getElementById('n3')
var r = ''

if (v1 < v2) {
    r = v2
} else {
    r = v1
}
if (r < v3) {
    r = v3
}

res.style.textAlign = 'center'
res.innerHTML = `O maior número é o ${r}.`
}
*/