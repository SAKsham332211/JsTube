var user = "admin";

switch (user) {
  case "admin":
    console.log("You Get full Acess");
  //break;

  case "subadmin":
    console.log("gets access to create/delete courses");
  //break;

  case "testprep":
    console.log("gets access to create/delete courses");
  //break;

  case "user":
    console.log("gets access to consume content");
  //break;

  default:
    console.log("Trial user");
}
