Array.prototype.myForEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (this.includes(this[i])) {
      callback(this[i], i, this);
    }
  }
};

let newArr = [];
let arr = [1, 2, 3, 4, 5].myForEach((item, i) => newArr.push(item));
console.log(newArr);
