Array.prototype.myReduce = function (callback, initialVal) {
  let accumulator = initialVal || undefined;
  for (let i = 0; i < this.length; i++) {
    if (accumulator) {
      accumulator = callback(accumulator, this[i], this, i);
    } else {
      accumulator = this[i];
    }
  }

  return accumulator;
};

let result = [1, 2, 3, 4, 5].myReduce((acc, val) => acc + val);
console.log(result);
