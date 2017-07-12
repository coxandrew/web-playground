class LockSmith {
  constructor(lock) {
    this.lock = lock;
  }

  attemptUnlock(actions) {
    let thisClass = this;
    this.lock = actions.split("").reduce(function (lock, action) {
      return thisClass["move" + action]();
    }, this.lock);
  }

  moveR() {
    this.lock = this.lock.map(function (row) {
      return this.lettersToSlide(row).padStart(row.length, ".");
    }, this);
  }

  moveD() {
    return this.lock;
  }

  rotateCounterClockwise() {
  }

  lettersToSlide(row) {
    return row.split("").filter(function (slot) {
      return slot !== ".";
    }).join("");
  }
}

function secretArchivesLock(lock, actions) {
  smithy = new LockSmith(lock);
  smithy.attemptUnlock(actions);

  return smithy.lock;
}

console.log(secretArchivesLock(
                            ["AB..",
                            "C...",
                            "....",
                            "...."],
                            "RD")
);
