class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  courseList = [];

  getInfo() {
    return { name: this.name, email: this.email };
  }

  enrollCourse(name) {
    this.courseList.push(name);
  }

  getCourseList() {
    return this.courseList;
  }
}

class SubAdmin extends User {
  constructor(name, email) {
    super(name, email);
  }
  getAdminInfo() {
    return "I am Subadmin";
  }
  login() {
    return "you are logged in";
  }
}

module.exports = User;

const saksham = new User("saksham", "saksham@lco.bittu");

console.log(saksham.getInfo());

const tom = new SubAdmin("tom", "tom@jerry.com");
console.log(tom.getAdminInfo());
console.log(tom.login());
console.log(tom.getInfo());
