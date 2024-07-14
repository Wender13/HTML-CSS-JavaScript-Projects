const add = function() {
	let total = 0
  for (let i = add.arguments.length - 1; i > -1; i--){
    total += arguments[i]
  }
  return total
};

console.log(add(2,4,6,3))