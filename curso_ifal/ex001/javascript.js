/* var n1 = Number(window.prompt('Digite um número...'))

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

window.alert(`O maior número é ${r}`) */


function calculo() {
var v1 = window.document.getElementById('n1')
var v2 = window.document.getElementById('n2')
var v3 = window.document.getElementById('n3')
var r = ''
var res = window.document.getElementById('res')

if (v1.value.length == 0 || v2.value.length == 0 || v3.value.length == 0) {
    window.alert('[ERRO] Impossivel calcuclar!')
} else {
    let i = Number(v1.value)
    let m = Number(v2.value)
    let f = Number(v3.value)

    if (i < m) {
        r = m
} else {
        r = i
        }
if (r < f) {
        r = f
        }
}
}

res.style.textAlign = 'center'
res.innerHTML = `O maior número é o ${r}. \u{1F44D}`