const removeFromArray = function(Array) {
    for (let i = removeFromArray.arguments.length - 1; i > 0; i--) {
        let position = Array.indexOf(arguments[i])
        if (position >= 0) {
            Array.splice(position,1)
        } else {
            continue
        }
    }
    console.log(Array)
};

removeFromArray([1,2,3,4,5,6,7,8,9],10,8,4,2,'1')