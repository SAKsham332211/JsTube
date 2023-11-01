var User = function (firstname, cousreCount) {
  this.firstname = firstname;
  this.cousreCount = cousreCount;
  this.getCourseCount = function () {
    console.log(`course count is: ${this.cousreCount}`);
  };
};

User.prototype.getFirstname = function () {
  console.log(`your first name is: ${this.firstname}`);
};

var saksham = new User("Saksham", 23);
saksham.getCourseCount();
saksham.getFirstname();

var sam = new User("sam", 24);
//console.log(sam);
sam.getCourseCount();
sam.getFirstname();
