const CountBs = function(str, letter){
    let stringLength = str.length - 1
    let Letters = 0
    for (i = 0; i <= stringLength; i++){
        if (str[i] == letter){
            Letters++
        } else {
            continue
        }
    }
    return Letters
}

console.log(CountBs('TesteeeeE','e'))