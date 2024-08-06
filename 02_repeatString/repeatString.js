const repeatString = function(stringMessage,repeat) {
    let arrayMessage = []
    for(let i=0; i < repeat; i++) {
        arrayMessage[i] = stringMessage
    }
    if(repeat < 0) {
        return "ERROR"
    } else {
    return arrayMessage.join("")
    }
};

// Do not edit below this line
module.exports = repeatString;
