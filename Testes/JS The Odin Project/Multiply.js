const multiply = function(Array) {
    ArrayLength = Array.length - 1
    Total = Array[0]
    for(i = 1;i <= ArrayLength; i++){
        Total *= Number(Array[i])
    }
    return Total
};

console.log(multiply([1,2,3,4]))