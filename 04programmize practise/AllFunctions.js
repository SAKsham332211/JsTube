/*const a = Math.random();
console.log(a);
*/

/*const a = Math.random() * (10 - 1) + 1;
console.log(`random values between 1 and 10 is ${a}`);
*/

/*const a = Math.floor(Math.random() * (10 - 1)) + 1;
console.log(`random values between 1 and 10 is ${a}`);
*/

/*const min = parseInt(1);
const max = parseInt(10);
const a = Math.floor(Math.random() * (max - min)) + 1;

console.log(`the values between 1 and 10 is: ${a}`);
*/

/*function sum(num) {
  if (num > 0) {
    return num + sum(num - 1);
  } else {
    return num;
  }
}

const num = parseInt(10);
const result = sum(num);
console.log(`the sum is ${result}`);
*/

/*function guessNumber() {
  const random = Math.floor(Math.random() * 10) + 1;

  let number = parseInt("Guess a number from 1 to 10: ");
  while (number !== random) {
    number = parseInt("Guess a number from 1 to 10: ");
  }
  if (number == random) {
    console.log("You guessed the correct number.");
  }
}
guessNumber();
*/

/*function guessNumber() {
  const random = Math.floor(Math.random() * 10) + 1;

  let number = parseInt(7);

  while (number !== random) {
    number = parseInt(3);
  }

  if (number == random) {
    console.log("You guessed the correct number.");
  }
}

//
guessNumber();
*/

/*const string = "saksham";
const result = string.charCodeAt(0);
console.log(`the ascii value is: ${result}`);
*/

/*function parameter(x, y) {
  return x / y;
}

console.log(Math.round(parameter(3, 5)));
console.log(parameter(4, 5));
console.log(parameter(5, 5));
console.log(parameter(6, 5));
*/

/*function testVariable(variable) {
  if (typeof variable == "function") {
    console.log("The variable is of function type");
  } else {
    console.log("The variable is not function type");
  }
}
const count = true;
const x = function () {
  console.log("hello world");
};

testVariable(x);
testVariable(count);
*/

/*function greet() {
  console.log("Hello World");
}

setTimeout(greet);
console.log("this message is shown first");
*/

/*function overoading() {
  let length = arguments.length;
  if (arguments.length == 0) {
    console.log("you have passed no argument");
  } else if (arguments.length == 1) {
    console.log("you have passed atleast two argument");
  } else {
    let result = 0;
    for (let i = 0; i < length; i++) {
      result = result + arguments[i];
    }
    console.log(result);
  }
}
overoading();
overoading(3);
overoading(3, 9);
overoading(4, 9);
*/
