const add = function() {
	let total = 0
  for (let i = add.arguments.length - 1; i > -1; i--){
    total += arguments[i]
  }
  return total
};

const subtract = function() {
	let total = arguments[0]
    let arguTotal = subtract.arguments.length
    for (i = 1; i < arguTotal; i++){
        total -= arguments[i]
    }
    return total
};

const sum = function(Array) {
	ArrayLength = Array.length - 1
  Total = 0
  for(i = 0;i <= ArrayLength; i++){
    Total += Number(Array[i])
  }
  return Total
};

const multiply = function(Array) {
  ArrayLength = Array.length - 1
  Total = Array[0]
  for(i = 1;i <= ArrayLength; i++){
      Total *= Number(Array[i])
  }
  return Total
};

const power = function(num1,num2) {
  let Total = num1
for(i = 1; i < num2; i++){
      Total *= num1
  }
  return Total
};

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

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};