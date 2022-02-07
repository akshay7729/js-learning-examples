// map has a callback function
// it stores values in new array

Array.prototype.myMap = function (callback) {
  const result = [];

  for (let i = 0; i < this.length; i++) {
    if (this.includes(this[i])) {
      result[i] = callback(this[i], i, this);
    }
  }

  return result;
};

let sampleArr = [1, 2, 3];

let arr = sampleArr.myMap((item, i) => item);
console.log(arr);
