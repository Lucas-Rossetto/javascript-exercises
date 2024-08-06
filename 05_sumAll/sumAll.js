const sumAll = function(number1, number2) {
    let finalSum = 0;
    if(number1 < 0 || number2 < 0) {
        return "ERROR"
    }
    if(typeof number1 !== "number" | typeof number2 !== "number") {
        return "ERROR"
    }
    if(!Number.isInteger(number1) || !Number.isInteger(number2)) {
        return "ERROR"
    }
    
    if(number2 > number1 ){
    for (let i = number1 ; i <= number2 ; i++) {
        finalSum += i;
    }
    }

    if(number1 > number2 ){
        for (let i = number2 ; i <= number1 ; i++) {
            finalSum += i;
        }
    }
    
    return finalSum
};

// Do not edit below this line
module.exports = sumAll;
