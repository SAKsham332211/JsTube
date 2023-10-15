var root1, root2;

var a = 1;
var b = 6;
var c = 5;

var discriminant = b * b - 4 * a * c;

if (discriminant > 0) {
  root1 = -b + Math.sqrt(discriminant) / (2 * a);
  root2 = -b - Math.sqrt(discriminant) / (2 * a);
  console.log("The roots are " + root1, root2);
} else if (discriminant == 0) {
  root1 = root2 = -b / (2 * a);
  console.log("the roots are " + root1, root2);
} else {
  var realpart = (-b / (2 * a)).toFixed(2);
  var imagpart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);
  console.log("The roots are " + realpart, imagpart);
}
