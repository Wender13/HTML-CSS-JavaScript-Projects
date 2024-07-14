const removeFromArray = function(Array) {
    for (let i = removeFromArray.arguments.length - 1; i > 0; i--) {
        let position = Array.indexOf(arguments[i])
        if (position >= 0) {
            Array.splice(position,1)
        } else {
            continue
        }   
    }
    return Array
};

// Do not edit below this line
module.exports = removeFromArray;
