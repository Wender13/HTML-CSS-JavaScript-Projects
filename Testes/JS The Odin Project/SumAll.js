const sumAll = function(num1,num2) {
    let bigger = 0
    let smaller = 0
    if (typeof(num1) != 'number' || typeof(num2) != 'number'){
        return sum = 'ERROR'
    }
    if (num1 < 0 || num2 < 0) {
        return sum = 'ERROR'
    } else {
        if (num1 > num2){
            bigger = num1
            smaller = num2
        } else {
            bigger = num2
            smaller = num1
        }
        let sum = smaller
        for (let i = bigger;i > smaller; i--) {
            sum += i
        }
        return sum
    }
};

console.log(sumAll(1,'4'))