export var promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (true) {
      resolve("hello world!");
    } else {
      reject("¡no bueno!");
    }
  }, 2000);
});

promise.then((data) => {
  console.log(`success: ${data}`);
}).catch((err) => {
  console.log(`error: ${err}`);
});
