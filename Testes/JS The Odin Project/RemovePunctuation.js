const removePunctuation = function (STR) {
    let newString = ''
    for (i = 0; i< STR.length; i++){
        if (STR[i] == ' ' || STR[i] == '!' || STR[i] == ',') {
            continue
        }
        newString += STR[i]
    }
    return newString
}

console.log(removePunctuation('t,est!e,'))