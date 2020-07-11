var arr = [1,2,3,4];

console.log('Min value', Math.min(...arr))
console.log('Max value', Math.max(...arr))


// sum
var minVal = arr.reduce((accumulator, currentVal) => {
    return accumulator + currentVal;
})

console.log('minVal with reduce', (arr.length * (arr.length + 1)) / 2);

