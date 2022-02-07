// filter returns new array
// filter has a context

Array.prototype.myFilter = function (callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      result.push(this[i]);
    }
  }
  return result;
};

let arr = [1, 2, 3, 4].myFilter((item, i) => item % 2 === 0);
console.log(arr);
