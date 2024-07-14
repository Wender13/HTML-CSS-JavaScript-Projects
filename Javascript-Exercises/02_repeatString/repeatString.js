const repeatString = function(word, times) {
    string = word
    if (times == 0) {
        string = ''
    } else if (times < 0) {
        string = 'ERROR'
    } else {
        for (var i =1; i < times; i++) {
            string += word
        }
    }
    return string
};

// Do not edit below this line
module.exports = repeatString;
