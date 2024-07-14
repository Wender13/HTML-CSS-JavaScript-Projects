const factorial = function(Num) {
	if (Num == 0) {
        return 1
    } else {
        let Total = 1
        for(i = Num;i > 0; i--){
            Total *= i
        }
        return Total
    }
};

console.log(factorial(5))