const Loop = function(text){
    for (i = 1; i <= 100; i++){
        console.log(text + ' ' + i)
    }
}

Loop('teste')

// forEach é uma boa opção para listas...
const Loop2 = function() {
    const lista = [1,2,3,4,5,6,7,8,9,10]

    lista.forEach((número,posição) => {
        console.log(`Teste ${número} na posiçõa ${posição}`)
    });
}
