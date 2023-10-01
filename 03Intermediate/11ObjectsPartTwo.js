var user = {
  firstName: "Saksham",
  lastName: "Sharma",
  Role: "Admin",
  loginCount: 32,
  facebookSignedIn: "True",
  courseList: [],
  BuyCourse: function (courseName) {
    this.courseList.push(courseName);
  },
  getCourseCount: function () {
    return `${this.firstName} is enrolled in total of ${this.courseList.length} courses`;
  },
};

console.log(user.firstName);
console.log(user.getCourseCount());
user.BuyCourse("React Js Course");
user.BuyCourse("Angular Course");
console.log(user.getCourseCount());
