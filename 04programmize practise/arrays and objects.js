/*var person = {
  Name: "Saksham",
  Age: 23,
  Hobbies: ["dreaming", "watching", "nature", "sports"],
  greet: function () {
    console.log("hello world");
  },

  score: {
    Maths: 85,
    science: 90,
  },
};

//
console.table(person);
*/

/*var person = {
  Name: "Saksham",
  Age: 23,
  Hobbies: ["dreaming", "watching", "nature", "sports"],
  greet: function () {
    console.log("hello world");
  },

  score: {
    Maths: 85,
    science: 90,
  },
};

console.log(typeof person);

delete person.greet;
delete person["Hobbies"];
delete person.score;

console.log(person);
*/

/*const person = {
  id: 1,
  name: "John",
  age: 23,
};

// check if key exists
//const hasKey = "name" in person;
const hasKey = person.hasOwnProperty("name");

if (hasKey) {
  console.log("The key exists.");
} else {
  console.log("The key does not exist.");
}
*/

/*var person = {
  Name: "Saksham",
  Age: 23,
  id: 1,
};

const cloneperson = Object.assign({}, person);
console.log(cloneperson);

cloneperson.Name = "Neha";
console.log(cloneperson.Name);
console.log(person.Name);
*/

/*var person = {
  Name: "Saksham",
  Age: 23,
  id: 1,
};

for (let key in person) {
  var value;
  value = person[key];
  console.log(key + "-" + value);
}
*/

/*var person = {
  Name: "Saksham",
  Age: 23,
  Gender: "Male",
};

var student = {
  location: "Jhansi",
  phone: 7398066171,
};

var newobj = Object.assign(person, student);
//console.log(newobj);
for (let key in newobj) {
  let value;
  value = newobj[key];
  console.log(key + "-" + value);
}
*/

/*var person = {
  Name: "Saksham",
  Age: 23,
  Gender: "Male",
  location: "Jhansi",
  phone: 7398066171,
};
var count = 0;
for (let key in person) {
  ++count;
}
console.log(count);
*/

/*var person = {
  Name: "Saksham",
  Age: 23,
  Gender: "Male",
  location: "Jhansi",
};

// person.height = 5.6;
person["height"] = 5.6;
console.log(person);
*/

/*var person = {
  Name: "Saksham",
  Age: 23,
  Gender: "Male",
  location: "Jhansi",
};
 
var result = JSON.stringify(person);
console.log(result);
console.log(typeof result);
*/

/*var string = "saksham sharma";
var result = string.replace(/s/g, "S");   
console.log(result);
*/

/*var string = "saksham sharma";
var stringsplit = string.split("s");
var result = stringsplit.join("S");
console.log(result);
*/

/*function removeItemFromAraay(array, n) {
  const newarray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== n) {
      newarray.push(array[i]);
    }
  }
  return newarray;
}

var result = removeItemFromAraay([1, 2, 3, 4, 5], 2);
console.log(result);
*/

/*const array = ["saksham", "sharma", "neha", "agra"];
var hasValue = array.includes("agra");
if (hasValue) {
  console.log("array contains value");
} else {
  console.log("array does not contain value");
}
*/

/*function insertElement() {
  var array = [1, 2, 3, 4, 5];
  let index = 3;
  let element = 8;
  array.splice(index, 0, element);
  console.log(array);
}

insertElement();
*/

/*function append(array, object) {
  array.push(object);
  console.log(array);
}

array = [1, 2, 3];
object = { x: 12, y: 18 };
append(array, object);
*/

/*function checkObj(array) {
  const result = Array.isArray(array);
  if (result) {
    console.log(`[${array}] is an array`);
  } else {
    console.log(`[${array}] is not an array`);
  }
}

array = [1, 2, 3];
checkObj(array);
*/

/*function emptyArray(arr) {
  arr = [];
  return arr;
}
const newarray = [1, 2, 3];
console.log(newarray);

const result = emptyArray(newarray);
console.log(result);
*/

/*function addElement(arr) {
  arr.unshift(4);
  console.log(arr);
}

arr = [1, 2, 3];
addElement(arr);
*/

/*function duplicate(arr) {
  uniqueArr = [];
  // for (let i = 1; i < arr.length; i++)
  for (let i of arr) {
    if (uniqueArr.indexOf(i) == -1) {
      uniqueArr.push(i);
    }
  }
  console.log(uniqueArr);
}

arr = [1, 2, 3, 2, 3];
duplicate(arr);
*/

/*function mergeDuplicate(arr1, arr2) {
  var array = arr1.concat(arr2);
  var uniqueArr = [];

  for (let i of array) {
    if (uniqueArr.indexOf(i) == -1) {
      uniqueArr.push(i);
    }
  }
  console.log(uniqueArr);
}

arr1 = [1, 2, 3];
arr2 = [2, 3, 4];
mergeDuplicate(arr1, arr2);
*/

/*function compareName(a, b) {
  var name1 = a.name.toUpperCase();
  var name2 = b.name.toUpperCase();

  let comparison = 0;
  if (name1 > name2) {
    comparison = 1;
  } else if (name1 < name2) {
    comparison = -1;
  }
  return comparison;
}

const students = [
  { name: "saksham", age: 23 },
  { name: "neha", age: 24 },
  { name: "apple", age: 10 },
];
console.log(students.sort(compareName));
*/

/*function twoDimensionArray(a, b) {
  let arr = [];
  for (let i = 0; i < a; i++) {
    for (let j = 0; j < b; j++) {
      arr[i] = [];
    }
  }

  for (let i = 0; i < a; i++) {
    for (let j = 0; j < b; j++) {
      arr[i][j] = j;
    }
  }

  return arr;
}
const a = 2;
const b = 3;
var result = twoDimensionArray(a, b);
console.log(result);
*/

/*function compareElement(arr1, arr2) {
  var result = JSON.stringify(arr1) == JSON.stringify(arr2);
  if (result) {
    console.log("the array have same element");
  } else {
    console.log("the array have different element");
  }
}

arr1 = [1, 2, 3, 4, 5];
arr2 = [1, 2, 3, 4, 5];
compareElement(arr1, arr2);
*/
// ......................................................................... intersection//
/*function intersection(arr1, arr2) {
  const setA = new Set(arr1);
  const setB = new Set(arr2);
  let intersectionResult = [];

  for (let i of setB) {
    if (setA.has(i)) {
      intersectionResult.push(i);
    }
  }

  return intersectionResult;
}

arr1 = [1, 2, 3, 4, 5];
arr2 = [1, 2, 3];
var result = intersection(arr1, arr2);
console.log(result);
*/

/*function checkVariable(variable) {
  if (variable == null) {
    console.log("the variable is undefined or null");
  } else {
    console.log("the variable is neither undefined or null");
  }
}

let newVariable;

checkVariable(5);
checkVariable("hello");
checkVariable(null);
checkVariable(newVariable);
*/
// ..........................................................................union//
/*function intersection(arr1, arr2) {
  const setA = new Set(arr1);
  const setB = new Set(arr2);
  let intersectionResult = new Set(arr1);

  for (let i of setB) {
    intersectionResult.add(i);
  }

  return intersectionResult;
}

arr1 = [1, 2, 3, 4, 5];
arr2 = [6, 7, 8];
var result = intersection(arr1, arr2);
console.log(result);
*/
// ..............................................................................difference//
/*function intersection(arr1, arr2) {
  const setA = new Set(arr1);
  const setB = new Set(arr2);
  let intersectionResult = new Set(arr1);

  for (let i of setB) {
    intersectionResult.delete(i);
  }

  return intersectionResult;
}

arr1 = [1, 2, 3, 4, 5];
arr2 = [1, 2, 3];
var result = intersection(arr1, arr2);
console.log(result);
*/
// ...............................................................................subset//
/*function intersection(arr1, arr2) {
  const setA = new Set(arr1);
  const setB = new Set(arr2);

  for (let i of setB) {
    if (setA.has(i)) {
      return true;
    }
  }

  return false;
}

arr1 = [1, 2, 3, 4, 5];
arr2 = [1, 2, 3];
var result = intersection(arr1, arr2);
console.log(result);
*/

function extractValue(arr, prop) {
  let extractedValue = arr.map((item) => item[prop]);

  return extractedValue;
}

const objArray = [
  { a: 1, b: 2 },
  { a: 4, b: 5 },
  { a: 8, b: 9 },
];

var result = extractValue(objArray, "a");
console.log(result);
