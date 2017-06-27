function mutation(strings) {
  firstString = strings[0].toLowerCase();
  secondString = strings[1].toLowerCase();

  for (var i = 0; i < secondString.length; i++) {
    if (firstString.indexOf(secondString[i]) == -1) {
      return false;
    }
  }
  return true;
}

console.log(mutation(["Helo", "hello"]));  // true
console.log(mutation(["Hello", "hello"])); // true
console.log(mutation(["Hello", "hey"]));   // false
console.log(mutation(["Bort", "bart"]));   // false
