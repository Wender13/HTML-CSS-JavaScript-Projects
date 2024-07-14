const ftoc = function(value) {
    let F = value
    C = (F-32)*5/9
    if (C%1 == 0){ 
        return C
    } else {
        return Number(C.toFixed(1))
    }
};

const ctof = function(value) {
    let C = value
    F = (C*9/5) + 32
    if (F%1 == 0) {
        return F
    } else {
        return Number(F.toFixed(1))   
    }
    
};

console.log(ftoc(32))

console.log(ftoc(100))

console.log(ftoc(-100))

console.log(ctof(0))

console.log(ctof(73.2))

console.log(ctof(-10))