const sum = function(Array) {
	ArrayLength = Array.length - 1
  Total = 0
  for(i = 0;i <= ArrayLength; i++){
    Total += Number(Array[i])
  }
  return Total
};

console.log(sum([7]))