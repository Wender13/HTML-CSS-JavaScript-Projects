// Remove punctuation and blank spaces

const removePunctuation = function (STR) {
    let newString = ''
    for (i = 0; i< STR.length; i++){
        if (STR[i] == ' ' || STR[i] == '!' || STR[i] == ',' || STR[i] == '.') {
            continue
        }
        newString += STR[i]
    }
    return newString
}

// Reverse string

const reverseString = function (str) {
    string = ''
    for (i = str.length - 1; i > - 1; i--) {
        string += str[i]
    }
    return string
};

// Principal function

const palindromes = function (String) {
    let cleanString = removePunctuation(String).toLowerCase()
    reverse = reverseString(cleanString)
    if (reverse == cleanString){
        return true
    } else {
        return false
    }
};

// Do not edit below this line
module.exports = palindromes;
