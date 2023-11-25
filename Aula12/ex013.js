var agora = new Date()
var diaSem = agora.getDay()

/*var diaSem = 9 */

/*
Para o JavaScript, os dias são assim:
0 - Domingo
1 - Segunda
2 - terca
3 - quarta 
4 - quinta
5 - sexta 
6 - sábado
*/
/*console.log(diaSem) */

switch (diaSem) {
    case 0:
        console.log(`Hoje é domingo!`)
        break
    case 1:
        console.log(`Hoje é segunda!`)
        break
    case 2:
        console.log(`Hoje é terça!`)
        break
    case 3:
        console.log(`Hoje é quarta!`)
        break
    case 4:
        console.log(`Hoje é quinta!`)
        break
    case 5:
        console.log(`Hoje é sexta!`)
        break
    case 6:
        console.log(`Hoje é sábado!`)
        break
    default:
        console.log(`[ERRO] Dia inválido!`)
        break   
}