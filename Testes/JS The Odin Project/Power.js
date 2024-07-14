const power = function(num1,num2) {
    let Total = num1
	for(i = 1; i < num2; i++){
        Total *= num1
    }
    return Total
};

console.log(power(2,4))