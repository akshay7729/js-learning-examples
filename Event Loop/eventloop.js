console.log("1");

setTimeout(() => {
  console.log("2");
}, 0);

setTimeout(() => {
  console.log("3");
}, 100);

const result = (val) => {
  return new Promise((resolve, reject) => {
    val ? resolve(true) : reject(false);
  });
};

result("test")
  .then((res) => console.log("4"))
  .catch((err) => console.log("err"));

// 1
// 4
// 2
// 3
