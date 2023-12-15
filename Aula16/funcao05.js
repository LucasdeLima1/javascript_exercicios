function fatorial (n) {
    
    if (n == 0) {
        return '[ERRO!] Digite um número maior que zero (0)!'
    } else if (n == 1) {
        return 1
    } else {
        return n * fatorial (n-1)
    }
}

console.log(fatorial(0))