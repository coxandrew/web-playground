import * as random from "../../js/misc/random.js";

export var simplePromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (random.getRandomInt(0, 2) === 1) {
      resolve("hello world!");
    } else {
      reject("¡no bueno!");
    }
  }, 1000);
});

simplePromise.then((data) => {
  console.log(`success: ${data}`);
}).catch((err) => {
  console.log(`error: ${err}`);
});
