const { performance } = require('perf_hooks');
const setOfData = require("./sortedSetOfNumbers.js");
let setOfData1 = setOfData.slice();

console.log("Data recived: ");
console.log(setOfData);

const recursiveSum = (array) => {
    var summa = array.pop();
    if (summa === 0) {
        return 0;
    };
    return summa + recursiveSum(setOfData);
};

var time0 = performance.now();
console.log("Final result:" + recursiveSum(setOfData));
time0 = performance.now() - time0;
console.log('Execution time0 = ', time0);


var summ = 0;

var time1 = performance.now();
for (var i = 0; i < setOfData1.length; i++) {
    summ = summ+  setOfData1[i];
}

console.log("Second result:" + summ);
time1 = performance.now() - time1;
console.log('Execution time1 = ', time1);

console.log("Difference: " + (time0-time1));