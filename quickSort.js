const { performance } = require('perf_hooks');
const setOfData = require("./unsortedSetOfNumbers.js");
console.log(setOfData)

const quickSortFunction = (array) => {
    //cash
    const arrLength = array.length;
    if (arrLength < 2) {
        return array;
    }
    if (arrLength == 2) {
        if (array[0] >= array[1]) {
            return [array[1], array[0]];
        } else {
            return array
        }
    }
    var greater = [];
    var less = [];
    const baseNumber = array[0];
    for (let i = 1; i < arrLength; i++) {
        if (array[i] < baseNumber) {
            less.push(array[i])
        }
        if (array[i] >= baseNumber) {
            greater.push(array[i])
        }
    }
    var temp = quickSortFunction(less).concat(baseNumber, quickSortFunction(greater));
    console.log(temp);
    return temp

}

var time0 = performance.now();
console.log(quickSortFunction(setOfData));
time0 = performance.now() - time0;
console.log('Execution time of quick sort with '+ setOfData.length + " elements = " + time0 + " milliseconds");