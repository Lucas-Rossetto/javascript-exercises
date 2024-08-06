const removeFromArray = function(arr, ...OtherArgs) {
          return arr.filter(val => !OtherArgs.includes(val))
}


// Do not edit below this line
module.exports = removeFromArray;
