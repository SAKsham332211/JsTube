var user = {
  firstName: "Saksham",
  lastName: "Sharma",
  Role: "Admin",
  loginCount: 32,
  facebookSignedIn: "True",
};

// console.log(user.firstName);
// console.log(user.lastName);
// console.log(user.facebookSignedIn);

console.table(user);

console.log(user.loginCount);
user.loginCount = 44;
console.log(user.loginCount);
