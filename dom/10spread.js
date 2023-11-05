// var returnedvalue = Math.max(2, 3, 4, 5, 6, 7, 8, 9);
// console.log(returnedvalue);

// var MyObj = {};

// Object.assign(MyObj, { a: 1, b: 2, c: 3 }, { x: 7, y: 8, z: 9 });
// console.log(MyObj);

// function sumOne(a, b) {
//   return a + b;
// }

// var myA = [5, 4];
// console.log(sumOne(...myA)); //////// ... => spread function

//........................................................first method

// function sumTwo(...args) {
//   let sum = 0;

//   for (const arg of args) {
//     sum = sum + arg;
//   }
//   return sum;
// }
// console.log(sumTwo(2, 3));

//...........................................................second method

function sumTwo(a, b, ...args) {
  let sum = 0;
  let multi = a * b;

  for (const arg of args) {
    sum = sum + arg;
  }

  return [sum, multi];
}

console.log(sumTwo(2, 3, 4, 5, 6, 7, 8, 9));
