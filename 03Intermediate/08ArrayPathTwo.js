function isEven(element) {
  //   //   if (element % 2 == 0) {
  //   //     return true;
  //   //   }
  //   //   return false;
  return element % 2 == 0;
}

// //console.log(isEven(2));

// ..................................................first method

//  var result = [2, 4, 6, 8].every(isEven);
//  console.log(result);

//....................................................second method

//  var result = [2, 4, 6, 8].every((e) => e % 2 == 0);
//  console.log(result);

//......................................................third method

var result = [2, 4, 7, 8].every((e) => {
  return e % 2 == 0;
});
console.log(result);
