const fibonacci = function(num) {
    let Num = Number(num) // Funciona com strings
    if (Num < 0) return 'OOPS' // Não funciona com números negativos
    if (Num <= 2) return 1; // 1º e 2º termo da sequência de Fibonacci é 1
    // Depois faço o resto, não sei o que fazer no momento
};

// Do not edit below this line
module.exports = fibonacci;
