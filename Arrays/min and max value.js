var arr = [1, 2, 3, 4];

console.log("Min value", Math.min(...arr));
console.log("Max value", Math.max(...arr));

// sum
var minVal = arr.reduce((accumulator, currentVal) => {
  return accumulator + currentVal;
});

console.log("minVal with reduce", (arr.length * (arr.length + 1)) / 2);

const minVal2 = (arr) => {
  let minVal = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < minVal) {
      minVal = arr[i];
    }
  }

  return minVal;
};

console.log("minVal", minVal2([5, 2, 4, 1, 3, 6]));
