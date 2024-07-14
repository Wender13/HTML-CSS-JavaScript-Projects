const reverseString = function(str) {
    string = ''
    for (i = str.length - 1; i > - 1; i--) {
        string += str[i]
    }
    return string
};

console.log(reverseString('racecar!!'))