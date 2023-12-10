var n1 = Number(window.prompt('Digite o primeiro número...'))
var n2 = Number(window.prompt('Digite o segundo número...'))
var n3 = Number(window.prompt('Digite o terceiro número...'))
var r = ''

if (n1 < n2) {
    r = n2
    n2 = n1
    n1 = r
    r = ''
    
}
if (n2 < n3) {
    r = n3
    n3 = n2
    n2 = r
    r = ''
}  
if (n1 < n2) {
    r = n2
    n2 = n1
    n1 = r
    r = ''
    
}

window.alert(`Em ordem de decrescente ${n1}, ${n2} e ${n3}.`)
