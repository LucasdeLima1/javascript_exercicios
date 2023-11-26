function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var agora = new Date()
    var hora = agora.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

/* var hora = '12' */

if (hora >= 0 && hora < 12) {
    /* Bom dia!*/
    img.src = 'fotomanha.png'
    document.body.style.background = '#e2cd9f'
} else if (hora >= 12 && hora < 18) {
    /* Boa tarde!*/
    img.src = 'fototarde.png'
    document.body.style.background = '#b9846f'
} else {
    /* Boa noite!*/
    img.src = 'fotonoite.png'
    document.body.style.background = '#515154'
}
}