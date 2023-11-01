const saksham = {
  firstname: "saksham",
  lastname: "sharma",
  role: "admin",
  courseCount: 3,
  getInfo: function () {
    console.log(`Firstname is ${this.firstname}
        last name is ${this.lastname}
        his role is ${this.role}
        he is studying in ${this.courseCount} courses
        `);
  },
};

const dj = {
  firstname: "rock",
  lastname: "star",
  role: "superStar",
  courseCount: 4,
};

var value = saksham.getInfo.bind(dj);
value();
