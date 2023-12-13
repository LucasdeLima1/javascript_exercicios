function gerar() {
    let val = window.document.getElementById('txtval')
    let tab = window.document.getElementById('seltab')

    if (val.value.length == 0 ) {
        window.alert('Por favor, digite um número!')
    } else {
    let v = Number(val.value)
    var c = 1
    tab.innerHTML = ''

    while (c <= 10) {
        let item = document.createElement('option')
        item.text = `${v} x ${c} = ${v*c}`
        item.value = `tab${c}`
        tab.appendChild(item)

        c++
    } 
}
}

/*
v = 4
c = 1
r = ''
while (c <= 10) {
    // console.log(`${c}`)

    r = v * c
    console.log(`${v} X ${c} = ${r}`)

    c++
} */