var User = function (firstname, cousreCount) {
  this.firstname = firstname;
  this.cousreCount = cousreCount;
  this.getCourseCount = function () {
    console.log(`course count is: ${this.cousreCount}`);
  };
};

var saksham = new User("Saksham", 23);
console.log(saksham);

var sam = new User("sam", 24);
console.log(sam);
