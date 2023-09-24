var isLoggedIn = true;
var isEmailVerified = true;
var cardInfo = false;

//if (isLoggedIn) {
//console.log("Logged in Success");

//if (isEmailVerified) {
//console.log("EMAIL is VERIFIED");

//if (cardInfo) {
//console.log("you can make a purchase");
//}
//}
//}

if (isLoggedIn && isEmailVerified && cardInfo) {
  console.log("you can make a purchase");
} else {
  console.log("you are not allowed");
}
