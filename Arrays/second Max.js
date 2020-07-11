// second largest val
var arr2 = [2,5,6,3,1,4];
var getMaxVal = Math.max(...arr2);
console.log('getMaxVal',getMaxVal);
arr2.splice(arr2.indexOf(getMaxVal),1);
console.log('arr2', arr2);
console.log('second max', Math.max(...arr2));