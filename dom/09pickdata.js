// const user = ["saksham", 3, "admin"];
// var role = user[2];
// var Name = user[0];

// console.log(role);
// console.log(Name);

const MyUser = {
  name: "saksham",
  courseCount: 3,
  role: "admin",
};

console.log(MyUser.name);
console.log(MyUser.role);

const { name, courseCount, role } = MyUser;
console.log(courseCount);
