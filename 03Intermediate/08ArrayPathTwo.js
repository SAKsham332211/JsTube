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

//  var result = [2, 4, 6, 8].every((x)=> x % 2 == 0);
//  console.log(result);

//......................................................third method

var result = [2, 4, 7, 8].every((e) => {
  return e % 2 == 0;
  console.log(result);
});

/* 
These 2 functions are equalent to each other, one is with name the other without name or arrow function
function xyz(x){
  var y = x * 1000;
  return y % 2 == 0;
}

var result = [2, 4, 6, 8].every((x) => {
  var metre = x * 1000;
  return metre % 2 == 0;
}); 
*/
