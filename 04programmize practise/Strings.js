/*function checkpalindrome(string) {
  const len = string.length;
  for (let i = 0; i < len / 2; i++) {
    if (string[i] !== string[len - 1 - i]) {
      return "its no a palindrome no";
    }
  }
  return "its a palindrome no";
}
const string = "madam";
const value = checkpalindrome(string);
console.log(value);
*/

/*const string = "I Am Saksham Sharma";
const words = string.split(" ");
words.sort();
console.log("the sorted words are:");

for (const element of words) {
  console.log(element);
}
*/

/*const string = "I Am Saksham Sharma";
const newText = string.replace("Am", "was");
console.log(newText);
*/

/*function reverseString(str) {
  let newString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
}

const str = "saksham sharma";
var result = reverseString(str);
console.log(result);
*/

/*function countString(str, letter) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) == letter) {
      count += 1;
    }
  }
  return count;
}
const string = "saksham";
const lettertocheck = "a";
const result = countString(string, lettertocheck);
console.log(result);
*/

/*function capitalizedFirstWord(str) {
  const capitalized = str.charAt(0).toUpperCase + str.slice(1);
  return capitalized;
}
const str = "saksham";
const result = capitalizedFirstWord(str);
console.log(result);
*/

/*function countvowels(str) {
  const count = str.match(/[aeiou]/gi).length;
  return count;
}

const str = "Vowels";
const result = countvowels(str);
console.log(result);
*/

/*function checkString(str) {
  if (str.startsWith("S") && str.endsWith("G")) {
    console.log("the string starts with S and ends with G ");
  } else if (str.startsWith("S")) {
    console.log("the string starts with S but does not ends with G ");
  } else if (str.endsWithsWith("G")) {
    console.log("the string starts does not with S but ends with G ");
  } else {
    console.log("the string starts does not with S and does not ends with G ");
  }
}

const string = "String";
checkString(string);
*/

/*const string = "Mr red has a red house and a red car";
const newText = string.split("red").join("blue");
console.log(newText);
*/

/*var word = "A red house had red carpet with red dots";

var words = word.split(" ");
var tempStr = "";
var count = 0;

for (let i = 0; i < words.length; i++) {
  var element = words[i];

  if (element === "red") {
    count++;

    if (count === 1`) {
      element = "green";
    }
  }

  tempStr += " " + element;
}
console.log(tempStr);
*/

/*const message =
  "i am saksham sharma\n" + "done btech in electronics and communication\n";
("from bundelkhand university.");
console.log(message);
*/

/*const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

function randomString(length) {
  const result = "";
  charactersLength = characters.length;
  for (i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
const length = 5;
console.log(randomString(5));
*/

/*const string = "hello world";
const newtext = "he";
if (string.startsWith(newtext)) {
  console.log("the string starts with new text");
} else {
  console.log("the string does not starts with new text");
}
*/

/*const string = "       Hello World     tyyy  ";
const result = string.trim();
console.log(result);
*/

/*const str = "saksham sharma";
const checkString = "sharma";
if (str.includes(checkString)) {
  console.log(`the str contain ${checkString}`);
} else {
  console.log(`the str does not contain ${checkString}`);
}
*/

/*const string1 = "Saksham Sharma";
const string2 = "Saksham Sharma";
const result = string1.toUpperCase() == string2.toUpperCase();
if (result) {
  console.log("strings are same");
} else {
  console.log("strings are not same");
}
*/

/*function getFileExtension(filename) {
  const extension = filename.split(".").pop();
  return extension;
}

const result1 = getFileExtension("module.js");
console.log(result1);

const result2 = getFileExtension("module.txt");
console.log(result2);
*/

/*const string = "Hello World";
const result = string.split(" ").join("");
console.log(result);
*/

/*const string = `i am saksham sharma.
 done btech.
 in electronics and communication`;
const result = string.replace(/(\r\n|\r|\n)/g, "<br>");
console.log(result);
*/
