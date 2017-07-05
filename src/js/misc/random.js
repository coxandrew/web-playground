// It might be tempting to use rounding to accomplish that, but doing so would
// cause your random numbers to follow a non-uniform distribution, which may
// not be acceptable for your needs.
// Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
export var getRandomInt = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  //The maximum is exclusive and the minimum is inclusive
  return Math.floor(Math.random() * (max - min)) + min;
}
