// promise.allSettled -> returns an array of all promises status even if they are rejected

var firstPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("First promise");
  }, 500);
});

var secondPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("secondPromise");
  }, 500);
});

var thirdPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("thirdPromise");
  }, 500);
});

Promise.all([firstPromise, secondPromise, thirdPromise]).then((response) =>
  console.log(response)
);
