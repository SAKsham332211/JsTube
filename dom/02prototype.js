var User = {
  name: "",
  getUsername: function () {
    console.log(`User name is: ${this.name}`);
  },
};

var saksham = Object.create(User);
//console.log(saksham);
saksham.name = "saksham sharma";
saksham.getUsername();

var sam = Object.create(User);
//console.log(sam);
sam.name = "sam sharma";
sam.getUsername();
