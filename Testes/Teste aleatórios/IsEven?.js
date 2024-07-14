const IsEven = function(num){
    if (num < 0){
        num *= (-1)
    } 
    if (num % 2 == 0){
        return `It's even!`
    } else {
        return `It's odd!`
    }
}

console.log(IsEven(-1))