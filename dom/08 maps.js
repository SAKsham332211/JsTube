var myMap = new Map();

myMap.set(1, "saksham");
myMap.set(2, "sharma");
myMap.set(3, "sam");
myMap.set(4, "kam");

console.log(myMap);

// for (let key of myMap.keys()) {
//   console.log(`key is ${key}`);
// }

// for (let value of myMap.values()) {
//   console.log(`value is ${value}`);
// }

for (let [key, value] of myMap) {
  console.log(`key is: ${key} and value is: ${value}`);
}
