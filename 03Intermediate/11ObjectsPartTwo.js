/* var user = {
  firstName: "Saksham",
  lastName: "Sharma",
  role: "Admin",
  loginCount: 32,
  facebookSignedIn: "True",
  courseList: [],
  buyCourse: function (courseName) {
    this.courseList.push(courseName);
  },
  getCourseCount: function () {
    return `${this.firstName} is enrolled in total of ${this.courseList.length} courses`;
  },
}; */

/*console.log(user.firstName);
console.log(user.getCourseCount());
user.buyCourse("React Js Course");
user.buyCourse("Angular Course");
console.log(user.getCourseCount()); */

var amazonData = {
  firstName: "Saksham",
  lastName: "Sharma",
  cart: [],
  buyProduct: function (name) {
    this.cart.push(name);
    console.log(name);

    // console.log(name, this.cartLength());
  },
  //cartLength: function () {
  // return this.cart.length;
  //},
};

console.log("Hello, ", amazonData.firstName, amazonData.lastName);
amazonData.buyProduct("Keyboard");

amazonData.buyProduct("Mouse");
//console.log(amazonData.cartLength());

//amazonData.buyProduct("Monitor");
//console.log(amazonData.cartLength());

//amazonData.buyProduct("laptop");
//console.log(amazonData.cartLength());

//amazonData.buyProduct("Shirt");
//console.log(amazonData.cartLength());
