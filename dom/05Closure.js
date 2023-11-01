// function init() {
//   var firstname = " saksham";
//   console.log("i am init");

//   function sayFirstname() {
//     console.log(firstname);
//   }
//   return sayFirstname;
// }
// var value = init();
// value();

function doAddition(x) {
  return function (y) {
    return x + y;
  };
}

//var add = doAddition(4);
//console.log(add(5));

console.log(doAddition(5)(5));
