//
function sum(firstnum, secNum) {
  var result = firstnum + secNum;

  return result;
}

//
function findSquareRoot(number) {
  var result = Math.sqrt(number);

  return result;
}

//
function triangleArea(height, base) {
  var area = (base * height) / 2;
  return area;
}

//
function swappingValue(firstNum, secNum) {
  var temp = firstNum;
  firstNum = secNum;
  secNum = temp;

  var result = {
    firstNum: firstNum,
    secNum: secNum,
  };
  return result;
}

//

function kilometers(value) {
  var outputKM = value * 1000;
  return outputKM;
}

//

function temperature(celcius) {
  var fahrenitrate = celcius * 1.8 + 32;
  return fahrenitrate;
}

//

function constant(value) {
  var result = value;
  return result;
}

//

function sayName() {
  return " saksham sharma";
}
//

function checknumber(n) {
  if (n > 0) {
    return "Positive";
  } else if (n < 0) {
    return "negative";
  } else {
    return "zero";
  }
}

//

function okTested(n) {
  if (n % 2 == 0) {
    return "even";
  } else {
    return "odd";
  }
}
//

function largestnumber(p, q, r) {
  if (p > q && p > r) {
    return p;
  } else if (q > p && q > r) {
    return "q";
  } else {
    return "r";
  }
}

//

function isprime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      return "false";
    } else {
      return "true";
    }
  }
}
//

//console.log(sum(2, 3));
//console.log(findSquareRoot(64));
// console.log(triangleArea(6, 4));
// console.log(swappingValue(2, 4));
//console.log(kilometers(2));
// console.log(temperature(10));
// console.log(constant(50));
// console.log(sayName());
// console.log(checknumber(5));
// console.log(checknumber(-5));
// console.log(checknumber(0));
//console.log(okTested(4));
//console.log(okTested(5));
//console.log(largestnumber(7, 6, 5));
//console.log(isprime(59));
//

var name = "Saksham";
var num = 4;
var opinion = true;

var ages = [4, 34, 35, 99];
var names = ["Saksham", "Kapil"];

function primeNumbersInterval(lowernumber, highernumber) {
  var primeNumbers = [];
  for (let i = lowernumber; i < highernumber; i++) {
    let flag = 0;

    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        flag = 1;
        break;
      }
    }
    if (i > 1 && flag == 0) {
      //console.log(i);
      primeNumbers.push(i);
    }
  }

  return primeNumbers;
}

//console.log(primeNumbersInterval(5, 9));
var result = primeNumbersInterval(1, 10);
console.log(result);

/*var lowernumber = 10;
var highernumber = 50;
console.log(`the prime number between ${lowernumber} and ${highernumber} is:`);

for (let i = lowernumber; i < highernumber; i++) {
  let flag = 0;

  for (let j = 2; j < i; j++) {
    if (i % j == 0) {
      flag = 1;
      break;
    }
  }
  if (i > 1 && flag == 0) {
     console.log(i);
  }
}
*/

/*const number = 5;
if (number < 0) {
  console.log("!! error");
} else if (number == 0) {
  console.log(`the factorial of ${number} is 1:`);
} else {
  let factorial = 1;
  for (let i = 1; i < number; i++) {
    factorial *= 3;
  }
  console.log(` the factorial of ${number} is ${factorial}. `);
}
*/

/*var number = 2;
for (i = 1; i <= 10; i++) {
  var result = i * number;
  console.log(result);
}
*/

/*var number = 10;
let n1 = 0,
  n2 = 1,
  nextTerm;

for (i = 1; i < number; i++) {
  console.log(n1);
  nextTerm = n1 + n2;
  n1 = n2;
  n2 = nextTerm;
}


console.log("fibonacci series");
*/

/*var number = 153;
var sum = 0;

var temp = number;
while (temp > 0) {
  var remainder = temp % 10;
  sum += remainder * remainder * remainder;
  temp = parseInt(temp / 10);
}
if (sum == number) {
  console.log(`${number} is a armstrong number`);
} else {
  console.log(`${number} is not a armstrong number`);
}
*/

/*var lowNum = 8;
var highNum = 500;

for (let i = lowNum; i <= highNum; i++) {
  let numberofdigits = i.toString().length;
  var sum = 0;
  var temp = i;

  while (temp > 0) {
    let remainder = temp % 10;
    sum += remainder ** numberofdigits;
    temp = parseInt(temp / 10);
  }
  if (sum == i) {
    console.log(i);
  }
}
*/

/*var operator = ("+", "-", "*", "/");
var Num1 = 3.6;
var Num2 = 2.6;
var result;

if (operator == "+") {
  result = Num1 + Num2;
} else if (operator == "-") {
  result = Num1 - Num2;
} else if (operator == "*") {
  result = Num1 * Num2;
} else {
  result = Num1 / Num2;
}
console.log(`${Num1} ${operator} ${Num2} = ${result}`);
*/

/*var num = 20;
var sum = 0;
for (let i = 1; i <= num; i++) {
  sum += i;
}
console.log("the sum of natural no is:", sum);
*/

/*var a = 8;
var b = 18;
var c = 88;

var result1 = a % 10;
var result2 = b % 10;
var result3 = c % 10;

if (result1 == result2 && result1 == result3) {
  console.log(`${a} ${b} ${c} have same last digit`);
} else {
  console.log(`${a} ${b} ${c} have different last digit`);
}
*/

/*var num1 = 60;
var num2 = 72;
var hcf;

for (i = 1; i <= num1 && i <= num2; i++) {
  if (num1 % i == 0 && num2 % i == 0) {
    hcf = i;
  }
}
console.log(`hcf of $(num1) and $(num2) is ${hcf}.`);

*/

/*var num = 12;
for (i = 1; i <= num; i++) {
  if (num % i == 0) {
    console.log(i);
  }
}
*/

/*var num1 = 6;
var num2 = 8;
var min;

min = num1 > num2 ? num1 : num2;

while (true) {
  if (min % num1 == 0 && min % num2 == 0) {
    console.log(`the lcm of ${num1} and ${num2} is ${min}`);
    break;
  }
  min++;
}

*/
