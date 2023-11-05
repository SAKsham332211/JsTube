const User = require("./11class.js");

const saksham = new User("saksham", "saksham@lco.bittu");

console.log(saksham.getInfo());
saksham.enrollCourse("React Bootcamp");
saksham.enrollCourse("Angular Bootcamp");

console.log(saksham.getCourseList());

let courses = saksham.getCourseList();
courses.forEach((c) => console.log(c));
