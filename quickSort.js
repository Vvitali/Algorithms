const { performance } = require('perf_hooks');
const setOfData = require("./unsortedSetOfNumbers.js");
console.log(setOfData)

const quickSortFunction = (array)=>{
    if(array.length<2){
        return array;
    }

}

console.log(quickSortFunction(setOfData));