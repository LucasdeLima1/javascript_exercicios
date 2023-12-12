function contar() {
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if ( ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('ERRO!')
    } else { 
        res.innerHTML = `Contando: `

        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        for (let c = i; c <= f; c += p) {
            res.innerHTML += `${c} `
        }
    }
}


/*
var n1 = 1
var n2 = 4
var c = 1
while (c < 4) {
    console.log(`Passo ${c}`)
    c = n1
    c = n1 + 2
} 

*/