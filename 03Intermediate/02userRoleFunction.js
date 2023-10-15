function getUserRole(name, role) {
  switch (role) {
    case "admin":
      return `${name} is admin with all success `;
      break;

    case "subadmin":
      return `${name} is subadmin with access to create/delete courses `;
      break;

    case "testprep":
      return `${name} is testprep with access to create/delete tests `;
      break;

    case "user":
      return `${name} is a user consume all content `;
      break;

    default:
      return `${name} is a trail user `;
      break;
  }
}

console.log(getUserRole("saksham", "admin"));

console.log(getUserRole("neha", "subadmin"));
