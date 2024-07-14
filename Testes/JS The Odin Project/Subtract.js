const subtract = function() {
	let total = arguments[0]
    let arguTotal = subtract.arguments.length
    for (i = 1; i < arguTotal; i++){
        total -= arguments[i]
    }
    return total
};

console.log(subtract(10,4,6,10))