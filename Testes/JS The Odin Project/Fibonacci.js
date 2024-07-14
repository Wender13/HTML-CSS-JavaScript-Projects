const fibonacci = function(num) {
    let Num = Number(num) // Funciona com strings
    if (Num < 0) return 'OOPS' // Não funciona com números negativos
    if (Num <= 2) return 1; // 1º e 2º termo da sequência de Fibonacci é 1
    return fibonacci(Num - 1) + fibonacci(Num - 2);
};

console.log(fibonacci(3))